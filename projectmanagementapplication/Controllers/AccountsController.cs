
using Microsoft.AspNetCore.Mvc;
using projectmanagementapplication.ViewModels;
using AutoMapper;
using projectmanagementapplication.Models.Entities;
using Microsoft.AspNetCore.Identity;
using projectmanagementapplication.Helpers;
using System.Threading.Tasks;
using projectmanagementapplication.Data;

namespace projectmanagementapplication.Controllers
{
  [Route("api/[controller]")]
  public class AccountsController : Controller
  {
    private readonly ApplicationDbContext _appDbContext;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<AppUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
    {
      _userManager = userManager;
      _mapper = mapper;
      _appDbContext = appDbContext;
    }
    [HttpGet]
    public IActionResult Get()
    {
      return new OkObjectResult("Działa");
    }
    // POST api/accounts
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {

      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        var userIdentity = _mapper.Map<AppUser>(model);
        userIdentity.UserName = model.UserName;

        var result = await _userManager.CreateAsync(userIdentity, model.Password);

        if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
        Student student = new Student()
        {
          IdentityId = userIdentity.Id,
          NrIndex = model.NrIndex,
          Confirmed = false
        };

        await _appDbContext.Students.AddAsync(student);
        await _appDbContext.SaveChangesAsync();
      }
      catch (System.Exception nazwa)
      {

        throw nazwa;
      }

      return new OkObjectResult("Account created");
    }
  }
}
