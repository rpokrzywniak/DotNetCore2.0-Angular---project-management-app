using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class WorkerTest
    {
        string identityId;
        AppUser appUser;
        [TestInitialize]
        public void InitWorker()
        {
            identityId = "1";
            appUser = new AppUser();
        }
        [TestMethod]
        public void WorkerValidTest()
        {
            var wrk = new Worker()
            {
                IdentityId = identityId,
                Identity = appUser,
            };
            var context = new ValidationContext(wrk);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(wrk, context, result, true);
            Assert.IsTrue(val);
        }
    }
}

