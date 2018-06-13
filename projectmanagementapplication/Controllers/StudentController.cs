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
  public class StudentController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public StudentController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }

    [HttpPost("update")]
    public async Task<Student> PostU([FromBody]dynamic data)
    {
      int id = data.id;
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
      student.IdentityId = data.identityId;
      student.NrIndex = data.nrIndex;
      student.ProjectId = data.projectId;
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
    }
    [HttpPost("create")]
    public async Task<Student> PostC([FromBody]dynamic data)
    {
      Student student = new Student();
      student.IdentityId = data.identityId;
      student.NrIndex = data.nrIndex;
      student.ProjectId = data.projectId;
      await applicationDbContext.Students.AddAsync(student);
      await applicationDbContext.SaveChangesAsync();
      int id = student.Id;
      return await applicationDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
    }
    [HttpPost("delete")]
    public async Task<AppUser> PostD([FromBody]int id)
    {
      var student = applicationDbContext.Students.FirstOrDefault(x => x.Id == id);
      applicationDbContext.Students.Remove(student);
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == student.IdentityId);
    }
    [HttpGet("confirmed")]
    public async Task<bool> Confirmed([FromQuery] string id)
    {
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == id);
      return student.Confirmed;
    }
    [HttpGet("notconfirmedstudents")]
    public async Task<IList<StudentViewModel>> NotConfirmedStudents()
    {
      IList<StudentViewModel> studentsToSend = new List<StudentViewModel>();
      var students = await applicationDbContext.Students.Where(x => x.Confirmed == false).ToListAsync();
      foreach (Student student in students)
      {
        var user = await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == student.IdentityId);
        StudentViewModel studentToSend = new StudentViewModel
        {
          FirstName = user.FirstName,
          LastName = user.LastName,
          Confirmed = student.Confirmed,
          NrIndex = student.NrIndex,
          ProjectId = student.ProjectId,
          GroupId = student.GroupId,
          Id = student.Id
        };
        studentsToSend.Add(studentToSend);
      }
      return studentsToSend;
    }
    [HttpGet("confirmedstudents")]
    public async Task<IList<StudentViewModel>> ConfirmedStudents([FromQuery]string id)
    {
      IList<StudentViewModel> studentsToSend = new List<StudentViewModel>();
      var worker = await applicationDbContext.Workers.FirstOrDefaultAsync(x => x.IdentityId == id);
      var groups = await applicationDbContext.Groups.Where(x => x.WorkerId == worker.Id).ToListAsync();
      List<Student> students = new List<Student>();
      foreach(Group group in groups)
      {
        var studentsInGroup = await applicationDbContext.Students.Where(x => x.GroupId == group.Id).ToListAsync();
        students.AddRange(studentsInGroup);
      }
      foreach (Student student in students)
      {
        var user = await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == student.IdentityId);
        StudentViewModel studentToSend = new StudentViewModel
        {
          FirstName = user.FirstName,
          LastName = user.LastName,
          Confirmed = student.Confirmed,
          NrIndex = student.NrIndex,
          ProjectId = student.ProjectId,
          GroupId = student.GroupId,
          Id = student.Id
        };
        studentsToSend.Add(studentToSend);
      }
      return studentsToSend;
    }
    [HttpPut]
    public async Task<bool> ConfirmStudent([FromBody]StudentViewModel student)
    {
      var studentToSave = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.Id == student.Id);
      studentToSave.Confirmed = student.Confirmed;
      studentToSave.GroupId = student.GroupId;
      await applicationDbContext.SaveChangesAsync();
      return true;
    }
    [HttpPut("leavegroup")]
    public async Task<bool> LeaveGroup([FromBody]string id)
    {
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == id);
      student.ProjectId = null;
      await applicationDbContext.SaveChangesAsync();
      return true;
    }
    [HttpPut("removegroup")]
    public async Task<bool> RemoveGroup([FromBody]string id)
    {
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == id);
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == student.ProjectId);
      applicationDbContext.Projects.Remove(project);
      await applicationDbContext.SaveChangesAsync();
      return true;
    }
  }
}
