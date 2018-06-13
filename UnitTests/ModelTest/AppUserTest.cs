using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class AppUserTest
    {
        string firstName;
        string lastName;

        [TestInitialize]
        public void InitAppUser()
        {
            firstName = "Jho";
            lastName = "Ban";
        }
        [TestMethod]
        public void AppUserValidTest()
        {
            var appUser = new AppUser()
            {
                FirstName = firstName,
                LastName = lastName,
            };
            var context = new ValidationContext(appUser);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(appUser, context, result, true);
            Assert.IsTrue(val);
        }
    }
}

