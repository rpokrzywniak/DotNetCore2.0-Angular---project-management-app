using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class StudentTest
    {
        string identityId;
        int nrIndex;
        int projectId;
        int groupId;
        Project project;
        AppUser appUser;
        Group group;
        [TestInitialize]
        public void InitStudentTest()
        {
            identityId = "1";
            nrIndex = 1;
            projectId = 1;
            groupId = 1;
            project = new Project();
            appUser = new AppUser();
            group = new Group();
        }
        [TestMethod]
        public void TestValidTest()
        {
            var std = new Student()
            {
                IdentityId = identityId,
                NrIndex = nrIndex,
                ProjectId = projectId,
                Project = project,
                Identity = appUser,
                GroupId = groupId,
                Group = group
            };
            var context = new ValidationContext(std);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(std, context, result, true);
            Assert.IsTrue(val);
        }
    }
}

