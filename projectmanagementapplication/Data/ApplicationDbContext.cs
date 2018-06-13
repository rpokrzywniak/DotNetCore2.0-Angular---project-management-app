

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using projectmanagementapplication.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace projectmanagementapplication.Data
{
public class ApplicationDbContext : IdentityDbContext<AppUser> 
{
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
        
        public DbSet<Admin> Admin { get; set; }
        public DbSet<Worker> Workers { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Group> Groups { get; set; }
  }
}
 
