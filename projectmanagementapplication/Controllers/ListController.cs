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
  public class ListController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public ListController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }

    [HttpGet("list")]
    public async Task<IList<Project>> ListAsync()
    {

      return await applicationDbContext.Projects.Where(x => x.Pblic == true && x.CreateDate.Year >= DateTime.Now.Year - 1).ToListAsync();   //LINQ   
    }
    [HttpGet("projects")]
    public async Task<IList<Project>> AllProjectsAsync()
    {
      return await applicationDbContext.Projects.Where(x=>x.CreateDate.Year>=DateTime.Now.Year-1).ToListAsync();
    }
    [HttpGet("pastprojects")]
    public async Task<IList<Project>> AllPastProjectsAsync()
    {
      return await applicationDbContext.Projects.Where(x => x.CreateDate.Year < DateTime.Now.Year - 1).ToListAsync();
    }
    [HttpGet("students")]
    public async Task<IList<StudentViewModel>> AllStudentsAsync()
    {
      IList<StudentViewModel> studentsToSend = new List<StudentViewModel>();
      var students = await applicationDbContext.Students.ToListAsync();
      foreach (Student student in students) {
        var user = await applicationDbContext.Users.FirstOrDefaultAsync(x => x.Id == student.IdentityId);
        StudentViewModel studentToSend = new StudentViewModel
        {
          FirstName = user.FirstName,
          LastName = user.LastName,
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
    public async Task<IActionResult> ChangeStar([FromBody]ProjectViewModel projectToChangeStar)
    {
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == projectToChangeStar.id);
      if (project != null)
      {
        project.Starred = projectToChangeStar.starred;
        await applicationDbContext.SaveChangesAsync();
        return new OkObjectResult("Star set");
      }
      return new BadRequestObjectResult("Fail");
  }
    [HttpPut("tochange")]
    public async Task<IActionResult> UpdateToChange([FromBody]ProjectViewModel receivedProject)
    {
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == receivedProject.id);
      if (project != null)
      {
        project.ToChange = receivedProject.toChange;
        await applicationDbContext.SaveChangesAsync();
        return new OkObjectResult("ToChange set");
      }
      return new BadRequestObjectResult("Fail");
    }
    [HttpPut("confirm")]
    public async Task<IActionResult> UpdateConfirm([FromBody]ProjectViewModel receivedProject)
    {
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == receivedProject.id);
      if (project != null)
      {
        project.Confirmed = receivedProject.confirmed;
        await applicationDbContext.SaveChangesAsync();
        return new OkObjectResult("Confirmed set");
      }
      return new BadRequestObjectResult("Fail");
    }
  }
}
