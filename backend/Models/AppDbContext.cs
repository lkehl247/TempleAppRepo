using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // DbSets for each model/table
    public DbSet<Appointment> Appointments { get; set; }
    public DbSet<AvailableAppointment> AvailableAppointments { get; set; }
    public DbSet<Companion> Companions { get; set; }
    public DbSet<FamilyMember> FamilyMembers { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<Ordinance> Ordinances { get; set; }
    public DbSet<Relationship> Relationships { get; set; }
    public DbSet<Temple> Temples { get; set; }
    public DbSet<UserAccount> UserAccounts { get; set; }
    public DbSet<WardContact> WardContacts { get; set; }

}