using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class GroupTest
    {
        int id;
        int workerId;
        string name;
        Worker worker;

        [TestInitialize]
        public void InitStudentTest()
        {
            id = 1;
            workerId = 1;
            name = "sample1";
            worker = new Worker();
        }

        [TestMethod]
        public void TestValidTest()
        {
            var std = new Group()
            {
                Id = id,
                WorkerId = workerId,
                Name = name,
                Worker = worker
            };
            var context = new ValidationContext(std);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(std, context, result, true);
            Assert.IsTrue(val);
        }
    }
}

