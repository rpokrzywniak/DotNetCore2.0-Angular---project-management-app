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
  }
}
