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
    public class PastProjectsControllerTests
    {
        Project proj1;
        Project proj2;
        Project proj3;

        List<Project> projL;

        [TestInitialize]
        public void TestInitialize()
        {
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
            projL = new List<Project>();
            projL.Add(proj1);
            projL.Add(proj2);
        }

        [TestMethod]
        public void testPList()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testPList")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj1);
                context.Projects.Add(proj2);
                context.Projects.Add(proj3);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new PastProjectsController(context);
                var result = service.PList();

                Assert.AreEqual(result.Count(), projL.Count());
            }
        }
    }
}
