using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class UserAccount
{
    [Key]
    public string UserName { get; set; }
    
    [ForeignKey("MembershipRecordNumber")]
    public int MembershipRecordNumber { get; set; }
    public Member Member { get; set; }
    
    public string FirstName { get; set; }
    
    public string LastName { get; set; }    
    
    public string PasswordHashed { get; set; }  
}