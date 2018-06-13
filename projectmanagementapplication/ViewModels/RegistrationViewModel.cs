
using FluentValidation.Attributes;
using projectmanagementapplication.ViewModels.Validations;

namespace projectmanagementapplication.ViewModels
{
  [Validator(typeof(RegistrationViewModelValidator))]
  public class RegistrationViewModel
  {
    public string Email { get; set; }
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string UserName { get; set; }
    public int NrIndex { get; set; }
  }
}
