

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using projectmanagementapplication.Models.Entities;
using projectmanagementapplication.Models;
using projectmanagementapplication.Auth;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using projectmanagementapplication.Helpers;
using System.Security.Claims;
using System.Linq;
using projectmanagementapplication.Data;
using Microsoft.EntityFrameworkCore;

namespace projectmanagementapplication.Controllers
{

    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JsonSerializerSettings _serializerSettings;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ApplicationDbContext _applicationDbContext;

        public AuthController(UserManager<AppUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions, ApplicationDbContext applicationDbContext)
        {
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
            _applicationDbContext = applicationDbContext;
            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
            if (identity == null)
            {
                return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
            }
      // Serialize and return the response
      var response = new
            {
                id=identity.Claims.Single(c=>c.Type=="id").Value,
                auth_token = await _jwtFactory.GenerateEncodedToken(credentials.UserName, identity),
                expires_in = (int)_jwtOptions.ValidFor.TotalSeconds
            };

            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(password))
            {
                // get the user to verifty
                var userToVerify = await _userManager.FindByNameAsync(userName);

               if (userToVerify != null)
                {
                    // check the credentials

                    if (await _userManager.CheckPasswordAsync(userToVerify, password))
                    {
                        var admin = await _applicationDbContext.Admin.FirstOrDefaultAsync(x => x.IdentityId == userToVerify.Id);
                        var worker = await _applicationDbContext.Workers.FirstOrDefaultAsync(x => x.IdentityId == userToVerify.Id);
                        var student = await _applicationDbContext.Students.FirstOrDefaultAsync(x => x.IdentityId == userToVerify.Id); // fix workers to students
                      
                        if(admin != null) return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id, Helpers.Constants.Strings.JwtClaims.ApiAdminAccess));
                        if(worker != null) return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id, Helpers.Constants.Strings.JwtClaims.ApiWorkerAccess));
                        if(student != null) return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id, Helpers.Constants.Strings.JwtClaims.ApiStudentAccess));

                        return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName,userToVerify.Id, Helpers.Constants.Strings.JwtClaims.ApiAccess));
                    }
                }
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }
    }
}
