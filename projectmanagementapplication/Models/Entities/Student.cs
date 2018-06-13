namespace projectmanagementapplication.Models.Entities
{
  public class Student
  {
    public int Id { get; set; }
    public int NrIndex { get; set; }
    public bool Confirmed { get; set; }
    public string IdentityId { get; set; }
    public int? ProjectId { get; set; }
    public int? GroupId { get; set; }
    public Project Project { get; set; }
    public AppUser Identity { get; set; }
    public Group Group { get; set; }
  }
}
