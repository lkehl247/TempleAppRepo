using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class WardContact
{
    [Key]
    public int WardId { get; set; }
    
    [Required]
    public string ContactFirstName { get; set; }
    
    [Required]
    public string ContactLastName { get; set; }
    
    [Required]
    public string ContactCalling { get; set; }
    
    [Required]
    public string ContactEmail { get; set; }
    
    [Required]
    public string ContactPhone { get; set; }
}