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
  }
}
