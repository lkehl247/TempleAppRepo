using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Ordinance
{
    [Key]
    public int OrdinanceId { get; set; }
    [Required]
    public string OrdinanceName { get; set; }
    [Required]
    public string Description { get; set; }
}