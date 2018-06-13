namespace projectmanagementapplication.Models.Entities
{
  public class Worker
  {
    public int Id { get; set; }
    public string IdentityId { get; set; }

    public AppUser Identity { get; set; } 
  }
}
