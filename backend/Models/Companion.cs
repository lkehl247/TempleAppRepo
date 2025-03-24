using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Companion
{
    [Key]
    public int CompanionId { get; set; }
    
    [ForeignKey("Appointment")]
    public int AppointmentId { get; set; }
    public Appointment Appointment { get; set; }
    
    [ForeignKey("Member")]
    public int MembershipRecordNumber { get; set; }
    public Member Member { get; set; }
    
    
}