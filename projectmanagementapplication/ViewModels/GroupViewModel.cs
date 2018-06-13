
using projectmanagementapplication.Models.Entities;
using System.Collections.Generic;

namespace projectmanagementapplication.ViewModels
{
  public class GroupViewModel
  {
    public int Id { get; set; }
    public int WorkerId { get; set; }
    public string Name { get; set; }
    public Worker Worker { get; set; }
    public IList<StudentViewModel> Students { get; set; }
  }
}
