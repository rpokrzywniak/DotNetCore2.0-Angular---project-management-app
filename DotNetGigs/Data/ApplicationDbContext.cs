

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using DotNetGigs.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DotNetGigs.Data
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
  }
}
 
