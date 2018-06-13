using projectmanagementapplication.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace UnitTests.ModelTest
{
    [TestClass]
    public class ProjectTest
    {
        string nameV, nameNv;
        string repoGitV, repoGitNv;
        string descp;
        string ment;
        Boolean pblic;
        string tchange;
        Boolean conf;
        Boolean star;

        [TestInitialize]
        public void InitProject()
        {
            nameV = "Troy";
            nameNv = "WALLLgOFFFgTEXTcccccccccccccccccccccccccccccccccccc";
            repoGitNv = "noniewejdzie";
            repoGitV = "https://rgosik@bitbucket.pgs-soft.com/scm/pnp/projects-management-application.git";
            descp = "Sample text";
            ment = "pgs";
            pblic = true;
            tchange = "sample";
            conf = true;
            star = true;
        }

        [TestMethod]
        public void ProjectValidTest()
        {
            var project = new Project()
            {
                Name = nameV,
                RepoGit = repoGitV,
                Description = descp,
                Mentoring = ment,
                Pblic = pblic,
                ToChange = tchange,
                Confirmed = conf,
                Starred = star,
            };
            var context = new ValidationContext(project);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(project, context, result, true);
            Assert.IsTrue(val);
        }
        [TestMethod]
        public void ProjectNotValidTest()
        {
            var project = new Project()
            {
                Name = nameNv,
                RepoGit = repoGitNv,
                Description = descp,
                Mentoring = ment,
                Pblic = pblic,
                ToChange = tchange,
                Confirmed = conf,
                Starred = star,
            };
            var context = new ValidationContext(project);
            var result = new List<ValidationResult>();
            var val = Validator.TryValidateObject(project, context, result, false);
            Assert.IsTrue(val);
        }
    }
}
