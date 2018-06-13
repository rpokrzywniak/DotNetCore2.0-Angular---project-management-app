
using System;
using System.ComponentModel.DataAnnotations;

namespace projectmanagementapplication.ViewModels
{
  public class CreateProjectViewModel
  {
    public string id { get; set; }
    [StringLength(50)]
    public string name { get; set; }
    [RegularExpression(@"^http(s)?://([\w-]+.)+[\w-]+(/[\w- ./?%&=])?.git$", ErrorMessage = "Nieprawidlowy link do repozytorium")]
    public string repoGit { get; set; }
    [StringLength(300)]
    public string description { get; set; }
    public string mentoring { get; set; }
    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime createDate { get; set; }
    public Boolean pblic { get; set; }
    public string toChange { get; set; }
    public Boolean confirmed { get; set; }
    public Boolean starred { get; set; }
  }
}
