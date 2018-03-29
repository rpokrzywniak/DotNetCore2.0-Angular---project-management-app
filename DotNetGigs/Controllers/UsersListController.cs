using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetGigs.ViewModels;
using AutoMapper;
using DotNetGigs.Models.Entities;
using Microsoft.AspNetCore.Identity;
using DotNetGigs.Helpers;
using DotNetGigs.Data;
using Microsoft.EntityFrameworkCore;

namespace DotNetGigs.Controllers
{
  [Route("api/[controller]")]
  public class UsersListController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public UsersListController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }
    public string[] RoleById(dynamic users)
    {
      string[] roles = new string[users.Count];
      var students = applicationDbContext.Students.Select(c => new { c.IdentityId }).ToList();
      var workers = applicationDbContext.Workers.Select(c => new { c.IdentityId }).ToList();
      var admins = applicationDbContext.Admin.Select(c => new { c.IdentityId }).ToList();
      bool find;
      for (int i = 0; i < users.Count; i++)
      {
        find = false;
        for (int j = 0; j < students.Count; j++)
        {
          if (users[i].Id.Equals(students[j].IdentityId))
          {
            roles[i] = "Student";
            find = true;
            break;
          }
        }
        if (find) continue;
        for (int j = 0; j < workers.Count; j++)
        {
          if (users[i].Id.Equals(workers[j].IdentityId))
          {
            roles[i] = "Worker";
            find = true;
            break;
          }
        }
        if (find) continue;
        for (int j = 0; j < admins.Count; j++)
        {
          if (users[i].Id.Equals(admins[j].IdentityId))
          {
            roles[i] = "Admin";
            find = true;
            break;
          }
        }
      }
      return roles;
    }

    [HttpGet("[action]")]
    public IList<AppUser> UList()
    {
      //var projectList = new List<Projekt>();
      //projectList.Add(new Projekt { Nazwa = "test",Git= "https://bitbucket.pgs-soft.com/projects/PNP/repos/projects-management-application/browse"  });// ctrl + space
      //projectList.Add(new Projekt { Nazwa = "test2" });

      return applicationDbContext.Users.ToList();   //LINQ   
    }
    [HttpGet("students")]
    public async Task<List<Student>> GetS()
    {
      return await applicationDbContext.Students.ToListAsync();   //LINQ   
    }
    [HttpGet("workers")]
    public async Task<List<Worker>> GetW()
    {
      return await applicationDbContext.Workers.ToListAsync();   //LINQ   
    }
    [HttpGet("admins")]
    public async Task<List<Admin>> GetA()
    {
      return await applicationDbContext.Admin.ToListAsync();   //LINQ   
    }
    [HttpGet("users")]
    public async Task<List<AppUser>> GetAll()
    {
      return await applicationDbContext.Users.ToListAsync();   //LINQ   
    }
    [HttpGet("roles")]
    public string[] GetR()
    {
      var users = applicationDbContext.Users.ToList();

      return RoleById(users); 
    }
  }
}