using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using projectmanagementapplication.Data;
using projectmanagementapplication.Controllers;
using projectmanagementapplication.Models.Entities;
using System.Threading.Tasks;
using projectmanagementapplication.ViewModels;

namespace UnitTests.ControllerTest
{
    [TestClass]
    public class MyProjectControllerTest
    {
        AppUser appU1;
        AppUser appU2;
        Project proj1;
        Student student1;
        Group gr1;

        ProjectViewModel projView1;
        CreateProjectViewModel crProjView1;

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
                FirstName = "keke",
                LastName = "riri"
            };
            proj1 = new Project()
            {
                Id = 1,
                Name = "Jhony",
                RepoGit = "",
                Description = "project1forPostTest",
                Mentoring = "PGS1",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
            };
            student1 = new Student()
            {
                Id = 1,
                NrIndex = 238456,
                IdentityId = "1",
                ProjectId = 1,
                Project = proj1,
                Identity = appU1
            };
            projView1 = new ProjectViewModel()
            {
                id = 1,
                confirmed = true,
                createDate = new DateTime(2018, 5, 12),
                description = "sampleView",
                mentoring = "PGS1",
                name = "krau",
                pblic = true,
                repoGit = "",
                starred = true,
                toChange = "samplechange1"
            };
            crProjView1 = new CreateProjectViewModel()
            {
                id = "2",
                confirmed = false,
                createDate = new DateTime(2018, 3, 13),
                description = "sampleView23",
                mentoring = "PGS2",
                name = "rkerker",
                pblic = true,
                repoGit = "",
                starred = true,
                toChange = "sampleCreatechange2"
            };
            gr1 = new Group()
            {
                Id = 1,
                Name = "sample",
                Worker = new Worker(),
                WorkerId = 1,
            };
        }

        [TestMethod]
        public async Task testPost()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testMyPost")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj1);
                context.Students.Add(student1);
                context.Users.Add(appU1);
                context.Groups.Add(gr1);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new MyProjectController(context);
                var result = await service.Post("1");

                Assert.AreEqual(result.Description, proj1.Description);
            }
        }

        [TestMethod]
        public async Task testPostU()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testMyPostU")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj1);
                context.Students.Add(student1);
                context.Users.Add(appU1);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new MyProjectController(context);
                var result = await service.PostU(projView1);

                Assert.AreEqual(result.Description, "sampleView");
            }
        }

        //[TestMethod]
        public async Task testPostC()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testCreateinPostC")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Students.Add(student1);
                context.Users.Add(appU1);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new MyProjectController(context);
                var result = await service.PostC(crProjView1);

                Assert.AreEqual(result.Name, "rkerker");
            }
        }
        //[TestMethod] (y)
        public async Task testPostJ()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testMyPostJ")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj1);
                context.Students.Add(student1);
                context.Users.Add(appU1);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new MyProjectController(context);
                var result = await service.PostJ(projView1);

                Assert.AreEqual(result.Name, "krau");
            }
        }
        
    }
}
