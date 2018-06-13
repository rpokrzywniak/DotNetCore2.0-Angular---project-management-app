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
  public class MyProjectController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public MyProjectController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }

    //Mój Projekt
    [HttpPost("myproject")]
    public async Task<Project> Post([FromBody]string id)
    {
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == id);
      return await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == student.ProjectId);
    }

    [HttpPost("update")]
    public async Task<Project> PostU([FromBody]dynamic data)
    {
      int id = data.id;
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == id);
      project.Name = data.name;
      project.Description = data.description;
      project.RepoGit = data.repoGit;
      project.Mentoring = data.mentoring;
      project.Pblic = data.pblic;
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == id);
    }
    [HttpPost("create")]
    public async Task<Project> PostC([FromBody]dynamic data)
    {
      string name = data.name;
      string repoGit = data.repoGit;
      string description = data.description;
      string mentoring = data.mentoring;
      bool pblic = data.pblic;
      string id = data.id;
      await applicationDbContext.Projects.AddAsync(new Project { Name = name, RepoGit = repoGit, Description = description, Mentoring = mentoring, Confirmed = false, CreateDate = DateTime.Now, Pblic = pblic, Starred = false, ToChange = "" });
      await applicationDbContext.SaveChangesAsync();
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == id);
      var project = await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Name == name);
      student.ProjectId = project.Id;
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Name == name);
    }
    [HttpPost("join")]
    public async Task<Project> PostJ([FromBody]dynamic data)
    {
      string idStudent = data.idStudent;
      int id = data.id;
      var student = await applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == idStudent);
      student.ProjectId = id;
      await applicationDbContext.SaveChangesAsync();
      return await applicationDbContext.Projects.FirstOrDefaultAsync(x => x.Id == id);
    }
  }
}
