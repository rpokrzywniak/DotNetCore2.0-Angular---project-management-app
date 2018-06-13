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

namespace UnitTests.ControllerTest
{
    [TestClass]
    public class UserListControllerTest
    {
        AppUser appU1;
        AppUser appU2;
        AppUser appU3;
        AppUser appU4;
        AppUser appU5;
        AppUser appU6;
        Project proj1;
        Project proj2;
        Student student1;
        Student student2;
        Worker worker1;
        Worker worker2;
        Admin admin1;
        Admin admin2;

        List<AppUser> appUList = new List<AppUser>();
        List<Student> studentList = new List<Student>();
        List<Worker> workerList = new List<Worker>();
        List<Admin> adminList = new List<Admin>();
        List<AppUser> getAllList = new List<AppUser>();
        List<AppUser> allAppUsers = new List<AppUser>();
        List<AppUser> emptyAppUsers = new List<AppUser>();
        string[] expectedRoles;

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
                FirstName = "Xinfr",
                LastName = "Kertu"
            };
            appU3 = new AppUser()
            {
                Id = "3",
                FirstName = "Fafw",
                LastName = "Kgdgtu"
            };
            appU4 = new AppUser()
            {
                Id = "4",
                FirstName = "Ffwwf",
                LastName = "Hjjjj"
            };
            appU5 = new AppUser()
            {
                Id = "5",
                FirstName = "Yeetee",
                LastName = "Pruurrrr"
            };
            appU6 = new AppUser()
            {
                Id = "6",
                FirstName = "Jvvdv",
                LastName = "Hvick"
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
                ToChange = "sample1",
                Starred = true
            };

            proj2 = new Project()
            {
                Id = 2,
                Name = "Joufff",
                RepoGit = "",
                Description = "Sample Desc2",
                Mentoring = "PGS2",
                Confirmed = true,
                Pblic = true,
                ToChange = "sample2",
                Starred = true
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
                NrIndex = 236426,
                IdentityId = "2",
                ProjectId = 2,
                Project = proj2,
                Identity = appU2
            };

            worker1 = new Worker()
            {
                Id = 3,
                IdentityId = "3",
                Identity = appU3
            };

            worker2 = new Worker()
            {
                Id = 4,
                IdentityId = "4",
                Identity = appU4
            };

            admin1 = new Admin()
            {
                Id = 5,
                IdentityId = "5",
                Identity = appU5
            };

            admin2 = new Admin()
            {
                Id = 6,
                IdentityId = "6",
                Identity = appU6
            };

            allAppUsers.Add(appU1);
            allAppUsers.Add(appU2);
            allAppUsers.Add(appU3);
            allAppUsers.Add(appU4);
            allAppUsers.Add(appU5);
            allAppUsers.Add(appU6);
            expectedRoles = new string[allAppUsers.Count];

            expectedRoles[0] = "Student";
            expectedRoles[1] = "Student";
            expectedRoles[2] = "Worker";
            expectedRoles[3] = "Worker";
            expectedRoles[4] = "Admin";
            expectedRoles[5] = "Admin";
        }

        [TestMethod]
        public void testUList()
        {
            appUList.Add(appU1);
            appUList.Add(appU2);

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testUList")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Users.Add(appU1);
                context.Users.Add(appU2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = service.UList();

                Assert.AreEqual(appUList.Count(), result.Count());
            }
        }

        [TestMethod]
        public async Task testGetS()
        {
            studentList.Add(student1);
            studentList.Add(student1);

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testSTest")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = await service.GetS();

                Assert.AreEqual(studentList.Count(), result.Count());
            }
        }

        [TestMethod]
        public async Task testGetW()
        {
            workerList.Add(worker1);
            workerList.Add(worker2);

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testWTest")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Workers.Add(worker1);
                context.Workers.Add(worker2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = await service.GetW();

                Assert.AreEqual(workerList.Count(), result.Count());
            }
        }

        [TestMethod]
        public async Task testGetA()
        {
            adminList.Add(admin1);
            adminList.Add(admin2);

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testATest")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Admin.Add(admin1);
                context.Admin.Add(admin2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = await service.GetA();

                Assert.AreEqual(adminList.Count(), result.Count());
            }
        }

        [TestMethod]
        public async Task testGetAll()
        {
            getAllList.Add(appU1);
            getAllList.Add(appU2);

            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testAllTest")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Users.Add(appU1);
                context.Users.Add(appU2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = await service.GetAll();

                Assert.AreEqual(getAllList.Count(), result.Count());
            }
        }

        [TestMethod]
        public void testGetR()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testGetR")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Users.Add(appU1);
                context.Users.Add(appU2);
                context.Users.Add(appU3);
                context.Users.Add(appU4);
                context.Users.Add(appU5);
                context.Users.Add(appU6);
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.Add(worker1);
                context.Add(worker2);
                context.Admin.Add(admin1);
                context.Admin.Add(admin2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = service.GetR();

                //CollectionAssert.AreEqual(result, expectedRoles);
                Assert.AreEqual("Worker", result[2]);
            }
        }

        [TestMethod]
        public void testGetFree()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "testGetFree")
                .Options;

            using (var context = new ApplicationDbContext(options))
            {
                context.Users.Add(appU1);
                context.Users.Add(appU2);
                context.Users.Add(appU3);
                context.Users.Add(appU4);
                context.Users.Add(appU5);
                context.Users.Add(appU6);
                context.Students.Add(student1);
                context.Students.Add(student2);
                context.Add(worker1);
                context.Add(worker2);
                context.Admin.Add(admin1);
                context.Admin.Add(admin2);
                context.SaveChanges();
            };

            using (var context = new ApplicationDbContext(options))
            {
                var service = new UsersListController(context);
                var result = service.GetFree();

                CollectionAssert.AreEqual(result, emptyAppUsers);
            }
        }
    }
}

