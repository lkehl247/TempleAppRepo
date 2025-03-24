using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Relationship
{
    [Key]
    public int RelationshipId { get; set; }
    
    public string RelationshipName { get; set; }
    
}