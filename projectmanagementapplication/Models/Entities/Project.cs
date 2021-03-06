
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace projectmanagementapplication.Models.Entities
{
  public class Project
  {
    public int Id { get; set; }
    [StringLength(50)]
    public string Name { get; set; }
    [RegularExpression(@"^http(s)?://([\w-]+.)+[\w-]+(/[\w- ./?%&=])?.git$", ErrorMessage ="Nieprawidlowy link do repozytorium")]
    public string RepoGit { get; set; }
    [StringLength(300)]
    public string Description { get; set; }
    public string Mentoring { get; set; }
    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime CreateDate { get; set; }
    public Boolean Pblic { get; set; }
    public string ToChange { get; set; }
    public Boolean Confirmed { get; set; }
    public Boolean Starred { get; set; }

  }
}
