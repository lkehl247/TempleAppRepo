using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class FamilyMember
{
    [Key]
    public int FamilyMemberId { get; set; }
    
    [ForeignKey("MembershipRecordNumber")]
    public int MembershipRecordNumber { get; set; }
    public Member Member { get; set; }
    
    [ForeignKey("MemberRecordNumber")]
    public int RelatedMembershipRecordNumber { get; set; }
    //public Members Members { get; set; }
    
    [ForeignKey("RelationshipId")]
    public int RelationshipId { get; set; }
    //public Relationships Relationships { get; set; }
    
    
}