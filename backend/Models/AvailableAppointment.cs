using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class AvailableAppointment
{
    [Key]
    public int AvailableAppointmentId { get; set; }
    
    [ForeignKey("TempleId")]
    [Required]
    public int TempleId { get; set; }
    public Temple Temple { get; set; }
    
    [ForeignKey("OrdinanceId")]
    [Required]
    public int OrdinanceId { get; set; }
    public Ordinance Ordinance { get; set; }
    
    public DateTime Date { get; set; }
    
    public  DateTime Time { get; set; }
    
    public int AvailableSeats { get; set; }
    
    public bool IsBooked { get; set; }
    
    public int MaxParticipants { get; set; }
}