
namespace projectmanagementapplication.Models.Entities
{
  public class Group
  {
    public int Id { get; set; }
    public int WorkerId { get; set; }
    public string Name { get; set; }
    public Worker Worker { get; set; }
  }
}
