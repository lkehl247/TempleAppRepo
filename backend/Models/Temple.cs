using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Temple
{
    [Key]
    public int TempleId { get; set; }
    [Required]
    public string TempleName { get; set; }
    [Required]
    public string StreetAddress { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public string State { get; set; }
    [Required]
    public string Zip { get; set; }
    [Required]
    public string Phone { get; set; }
    [Required]
    public string Email { get; set; }

}