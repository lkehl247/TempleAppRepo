using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Member
{
    [Key]
    public int MembershipRecordNumber { get; set; }
    
    [ForeignKey("FamilyMemberId")]
    public int FamilyMemberId { get; set; }
    public FamilyMember FamilyMember { get; set; }
    
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public string StreetAddress { get; set; }
    
    public string City { get; set; }
    
    public string State { get; set; }
    
    public string ZipCode { get; set; }
    
    public string Country { get; set; }
    
    public string? Email { get; set; }
    
    public string? Phone { get; set; }
    
    public DateTime DateOfBirth { get; set; }
    
    [ForeignKey("WardId")]
    public int WardId { get; set; }
    public WardContact WardContact { get; set; }
   
   public string HomeStake { get; set; }
   
   public string TempleDistrict { get; set; }
   
   public bool Gender { get; set; }
   
   public string RecommendStatus { get; set; }
   
   public DateTime RecommendIssueDate { get; set; }
   
   public DateTime RecommendExpirationDate { get; set; }
   
    
}