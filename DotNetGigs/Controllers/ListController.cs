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
  public class ListController : Controller
  {
    private readonly ApplicationDbContext applicationDbContext;
    public ListController(ApplicationDbContext applicationDbContext)
    {
      this.applicationDbContext = applicationDbContext;
    }

    [HttpGet("[action]")]
    public IList<Project> List()
    {
      //var projectList = new List<Projekt>();
      //projectList.Add(new Projekt { Nazwa = "test",Git= "https://bitbucket.pgs-soft.com/projects/PNP/repos/projects-management-application/browse"  });// ctrl + space
      //projectList.Add(new Projekt { Nazwa = "test2" });

      return applicationDbContext.Projects.Where(x => x.Pblic == true).ToList();   //LINQ   
    }
  }
}
