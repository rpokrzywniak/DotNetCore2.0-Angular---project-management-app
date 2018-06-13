
namespace projectmanagementapplication.ViewModels
{
  public class StudentViewModel
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public bool Confirmed { get; set; }
    public int NrIndex { get; set; }
    public int? ProjectId { get; set; }
    public int? GroupId { get; set; }
  }
}
