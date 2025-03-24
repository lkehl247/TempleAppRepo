using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.VisualBasic;

namespace backend.Models;

public class Appointment
{
    [Key]
    public int AppointmentId { get; set; }
    
    [ForeignKey("TempleId")]
    public int TempleId { get; set; }
    public Temple Temple { get; set; }
    
    [ForeignKey("OrdinanceId")]
    public int OrdinanceId { get; set; }
    public Ordinance Ordinance { get; set; }
    
    [ForeignKey("UserAccount")]
    public string UserName { get; set; }
    public UserAccount UserAccount { get; set; }
    
    public DateTime AppointmentDate { get; set; }
    public DateTime AppointmentTime { get; set; }
    public bool Confirmed { get; set; }
    public bool Cancelled { get; set; }
    public bool Completed { get; set; }
    public string? Notes { get; set; }
}