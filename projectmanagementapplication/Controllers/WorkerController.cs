using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projectmanagementapplication.ViewModels;
using AutoMapper;
using projectmanagementapplication.Models.Entities;
using Microsoft.AspNetCore.Identity;
using projectmanagementapplication.Helpers;
using projectmanagementapplication.Data;
using Microsoft.EntityFrameworkCore;

namespace projectmanagementapplication.Controllers
{
  [Route("api/[controller]")]
  public class WorkerController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public WorkerController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }

    [HttpPost("update")]
    public async Task<Worker> PostU([FromBody]dynamic data)
    {
      int id = data.id;
      var worker = await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.Id == id);
      worker.IdentityId = data.identityId;
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.Id == id);
    }
    [HttpPost("create")]
    public async Task<Worker> PostC([FromBody]dynamic data)
    {
      Worker worker = new Worker();
      worker.IdentityId = data.identityId;
      await applicationDbContext.Workers.AddAsync(worker);
      await applicationDbContext.SaveChangesAsync();
      int id = worker.Id;
      return await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.Id == id);
    }
    [HttpPost("delete")]
    public async Task<AppUser> PostD([FromBody]int id)
    {
      var worker = applicationDbContext.Workers.FirstOrDefault(x => x.Id == id);
      applicationDbContext.Workers.Remove(worker);
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == worker.IdentityId);
    }
    [HttpGet("groups")]
    public async Task<IList<GroupViewModel>> GetGroups([FromQuery]string id)
    {
      IList<StudentViewModel> studentsToSend = new List<StudentViewModel>();
      var students = await applicationDbContext.Students.ToListAsync();
      foreach (Student student in students)
      {
        var user = await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == student.IdentityId);
        StudentViewModel studentToSend = new StudentViewModel
        {
          FirstName = user.FirstName,
          LastName = user.LastName,
          NrIndex = student.NrIndex,
          ProjectId = student.ProjectId,
          Confirmed = student.Confirmed,
          GroupId = student.GroupId,
          Id = student.Id
        };
        studentsToSend.Add(studentToSend);
      }

      var worker = await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.IdentityId == id);
      var groups = await applicationDbContext.Groups.Where(x => x.WorkerId == worker.Id).ToListAsync();
      IList<GroupViewModel> groupsWithStudents = new List<GroupViewModel>();
      foreach (Group group in groups)
      {
        GroupViewModel groupWithStudents = new GroupViewModel
        {
          Id = group.Id,
          Name = group.Name,
          WorkerId = group.WorkerId,
          Students = new List<StudentViewModel>()
        };
        foreach (StudentViewModel student in studentsToSend)
        {
          if (student.GroupId == group.Id) groupWithStudents.Students.Add(student);
        }
        groupsWithStudents.Add(groupWithStudents);
      }
      return groupsWithStudents;
    }
    [HttpPost("creategroup")]
    public async Task<IList<GroupViewModel>> CreateGroup([FromBody]dynamic data)
    {
      string id = data.id;
      string name = data.name;
      var worker = await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.IdentityId == id);
      Group group = new Group
      {
        Name = name,
        WorkerId = worker.Id
      };
      await applicationDbContext.Groups.AddAsync(group);
      await applicationDbContext.SaveChangesAsync();
      return await GetGroups(id);
    }
    [HttpPut("deletegroup")]
    public async Task<bool> DeleteGroup([FromBody]GroupViewModel group)
    {
      var groupToDelete = await applicationDbContext.Groups.FirstOrDefaultAsync(x => x.Id == group.Id);
      var students = await applicationDbContext.Students.Where(x => x.GroupId == group.Id).ToListAsync();

      foreach (Student student in students)
      {
        student.GroupId = null;
        student.Confirmed = false;
      }

      applicationDbContext.Groups.Remove(groupToDelete);
      await applicationDbContext.SaveChangesAsync();
      return true;
    }
  }
}
