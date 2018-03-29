
namespace DotNetGigs.Models.Entities
{
    public class Admin  
    {
        public int Id { get; set; }     
        public string IdentityId { get; set; }   
        public AppUser Identity { get; set; }  // navigation property
    }
}
