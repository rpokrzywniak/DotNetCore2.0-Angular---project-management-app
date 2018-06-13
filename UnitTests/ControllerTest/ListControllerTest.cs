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
    public class ListControllerTest
    {
        Project proj1;
        Project proj2;
        Project proj3;
        Project proj4;
        Project proj5;
        Project proj6;
        AppUser appU1;
        AppUser appU2;
        AppUser appU3;
        Student student1;
        Student student2;
        Student student3;

        ProjectViewModel vievProj1;
        ProjectViewModel vievProj2;
        ProjectViewModel vievProj3;
        ProjectViewModel vievProj4;
        ProjectViewModel vievProj5;
        ProjectViewModel vievProj6;
        ProjectViewModel vievProjNull;

        List<Student> studentsList;

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
            proj4 = new Project()
            {
                Id = 4,
                Name = "PAST4",
                RepoGit = "",
                Description = "Sample Desc4",
                Mentoring = "PGS4",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2015, 3, 11)
            };
            proj5 = new Project()
            {
                Id = 5,
                Name = "PAST5",
                RepoGit = "",
                Description = "Sample Desc5",
                Mentoring = "PGS5",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2015, 5, 4)
            };
            proj6 = new Project()
            {
                Id = 6,
                Name = "sample6",
                RepoGit = "",
                Description = "Sample Desc6",
                Mentoring = "PGS6",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample",
                Starred = true,
                CreateDate = new DateTime(2018, 2, 4)
            };
            appU1 = new AppUser()
            {
                FirstName = "Jouuou",
                LastName = "Philli"
            };
            appU2 = new AppUser()
            {
                FirstName = "Herrry",
                LastName = "Joujou"
            };
            appU3 = new AppUser()
            {
                FirstName = "Yerg",
                LastName = "Uther"
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
            student2 = new Student()
            {
                Id = 2,
                NrIndex = 238416,
                IdentityId = "2",
                ProjectId = 2,
                Project = proj2,
                Identity = appU2
            };
            student3 = new Student()
            {
                Id = 3,
                NrIndex = 238444,
                IdentityId = "3",
                ProjectId = 3,
                Project = proj3,
                Identity = appU3
            };
            vievProj1 = new ProjectViewModel()
            {
                id = 1,
                name = "sample1",
                repoGit = "",
                description = "sampledesc1",
                mentoring = "",
                createDate = new DateTime(2018, 5, 12),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange ="sampleCHanger1"
            };
            vievProj2 = new ProjectViewModel()
            {
                id = 2,
                name = "sample2",
                repoGit = "",
                description = "sampledesc2",
                mentoring = "",
                createDate = new DateTime(2018, 5, 14),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger2"
            };
            vievProj3 = new ProjectViewModel()
            {
                id = 3,
                name = "sample3",
                repoGit = "",
                description = "sampledesc3",
                mentoring = "",
                createDate = new DateTime(2017, 5, 14),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger3"
            };
            vievProj4 = new ProjectViewModel()
            {
                id = 4,
                name = "sample4",
                repoGit = "",
                description = "sampledesc4",
                mentoring = "",
                createDate = new DateTime(2017, 5, 12),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger4"
            };
            vievProj5 = new ProjectViewModel()
            {
                id = 5,
                name = "sample5",
                repoGit = "",
                description = "sampledesc5",
                mentoring = "",
                createDate = new DateTime(2017, 7, 12),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger5"
            };
            vievProj6 = new ProjectViewModel()
            {
                id = 6,
                name = "sample6",
                repoGit = "",
                description = "sampledesc6",
                mentoring = "",
                createDate = new DateTime(2017, 9, 12),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger6"
            };
            vievProjNull = new ProjectViewModel()
            {
                id = 99,
                name = "sample",
                repoGit = "",
                description = "sampldescnull",
                mentoring = "",
                createDate = new DateTime(2018, 5, 13),
                confirmed = true,
                pblic = true,
                starred = false,
                toChange = "sampleCHanger2"
            };
            studentsList = new List<Student>();
        }

        [TestMethod]
        public async Task testListAsync()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testListAsync")
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
                var service = new ListController(context);
                var result = await service.ListAsync();
                
                Assert.AreEqual(2, result.Count());
            }
        }

        [TestMethod] //PSUJ to change Success
        public async Task testAllProjectsAsync()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testALLListAsync")
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
                var service = new ListController(context);
                var result = await service.AllProjectsAsync();

                Assert.AreEqual(3, result.Count());
            }
        }

        [TestMethod] //PSUJ to change Success
        public async Task testAllPastProjectsAsync()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testAllPastProjectsAsync")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj5);
                context.Projects.Add(proj1);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new ListController(context);
                var result = await service.AllPastProjectsAsync();

                Assert.AreEqual(1, result.Count());
            }
        }

        [TestMethod] //PSUJ to change Success
        public async Task testAllStudentsAsync()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testAllStudentsAsync")
                .Options;

            studentsList.Add(student1);
            studentsList.Add(student2);
            studentsList.Add(student3);

            using (var context = new ApplicationDbContext(options))
            {
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.Students.Add(student3);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new ListController(context);
                var result = await service.AllStudentsAsync();

               Assert.AreEqual(studentsList.Count(), result.Count());
            }
        }

        [TestMethod]
        public async Task testUpdateToChangeSuccess() 
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testUpdateToChangeSuccess")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj4);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new ListController(context);
                var result = await service.UpdateToChange(vievProj4);

                Assert.IsInstanceOfType(result, typeof(OkObjectResult));
            }
        }

        [TestMethod]
        public async Task testUpdateToChangeFail()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testUpdateToChange")
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
                var service = new ListController(context);
                var result = await service.UpdateToChange(vievProjNull);

                Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
            }
        }

        [TestMethod]
        public async Task testChangeStarSuccess()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testChangeStarSuccess")
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
                var service = new ListController(context);
                var result = await service.ChangeStar(vievProj2);

                Assert.IsInstanceOfType(result, typeof(OkObjectResult));
            }
        }

        [TestMethod]
        public async Task testChangeStarFail()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testChangeStarFail")
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
                var service = new ListController(context);
                var result = await service.ChangeStar(vievProjNull);

                Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
            }
        }

        [TestMethod]
        public async Task testUpdateConfirmSuccess()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testUpdateConfirmSuccess")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Projects.Add(proj1);
                context.Projects.Add(proj2);
                context.Projects.Add(proj3);
                context.Projects.Add(proj6);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new ListController(context);
                var result = await service.UpdateConfirm(vievProj6);
          
                Assert.IsInstanceOfType(result, typeof(OkObjectResult));
            }
        }

        [TestMethod]
        public async Task testUpdateConfirmFail()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testUpdateConfirmFail")
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
                var service = new ListController(context);
                var result = await service.UpdateConfirm(vievProjNull);

                Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
            }
        }
    }
}
