using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using projectmanagementapplication.Data;
using projectmanagementapplication.Controllers;
using projectmanagementapplication.Models.Entities;
using projectmanagementapplication.ViewModels;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UnitTests.ControllerTest
{
    [TestClass]
    public class StudentControllerTest
    {
        Project proj1;
        Project proj2;
        Project proj3;
        Student student1;
        Student student2;
        Student student3;
        AppUser appU1;
        AppUser appU2;
        AppUser appU3;
        List<Project> projL;

        [TestInitialize]
        public void TestInitialize()
        {
            appU1 = new AppUser()
            {
                Id = "1",
                FirstName = "Jouuou",
                LastName = "Philli"
            };
            appU2 = new AppUser()
            {
                Id = "2",
                FirstName = "Herrry",
                LastName = "Joujou"
            };
            appU3 = new AppUser()
            {
                Id = "3",
                FirstName = "Yerg",
                LastName = "Uther"
            };
            proj1 = new Project()
            {
                Id = 1,
                Name = "Jhony",
                RepoGit = "",
                Description = "Sample Desc1",
                Mentoring = "PGS1",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2018, 1, 18)
            };
            proj2 = new Project()
            {
                Id = 2,
                Name = "Jhonys",
                RepoGit = "",
                Description = "Sample Desc2",
                Mentoring = "PGS2",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2018, 2, 18)
            };
            proj3 = new Project()
            {
                Id = 3,
                Name = "Jhtddd",
                RepoGit = "",
                Description = "Sample Desc3",
                Mentoring = "PGS3",
                Confirmed = true,
                Pblic = false,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2018, 1, 11)
            };
            student1 = new Student()
            {
                Id = 1,
                NrIndex = 238456,
                IdentityId = "1",
                ProjectId = 1,
                Project = proj1,
                Identity = appU1,
                Confirmed = true
            };
            student2 = new Student()
            {
                Id = 2,
                NrIndex = 238416,
                IdentityId = "2",
                ProjectId = 2,
                Project = proj2,
                Identity = appU2,
                Confirmed = true
            };
            student3 = new Student()
            {
                Id = 3,
                NrIndex = 238444,
                IdentityId = "3",
                ProjectId = 3,
                Project = proj3,
                Identity = appU3,
                Confirmed = false
            };
        }

        [TestMethod]
        public async Task testPostDStud()
        {

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testPostDStud")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new StudentController(context);
                var result = await service.PostD(1);

                Assert.IsFalse(context.Students.Contains(student1));
            }
        }

        [TestMethod]
        public async Task testConfirmed()
        {

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testConfirmedStud")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.Users.Add(appU1);
                context.Users.Add(appU2);
                context.Users.Add(appU3);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new StudentController(context);
                var result = await service.Confirmed("1");

                Assert.IsTrue(result);
            }
        }
    }
}
