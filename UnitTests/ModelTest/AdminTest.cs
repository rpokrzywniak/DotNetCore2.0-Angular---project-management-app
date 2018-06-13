using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class AdminTest
    {
        string identityId;
        AppUser appUser;
        [TestInitialize]
        public void InitAdmin()
        {
            identityId = "1";
            appUser = new AppUser();
        }
        [TestMethod]
        public void AdminValidTest()
        {
            var adm = new Admin()
            {
                IdentityId = identityId,
                Identity = appUser,
            };
            var context = new ValidationContext(adm);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(adm, context, result, true);
            Assert.IsTrue(val);
        }
    }
}

