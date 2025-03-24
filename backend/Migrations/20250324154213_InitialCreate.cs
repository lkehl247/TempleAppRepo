using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FamilyMembers",
                columns: table => new
                {
                    FamilyMemberId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    MembershipRecordNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    RelatedMembershipRecordNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    RelationshipId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilyMembers", x => x.FamilyMemberId);
                });

            migrationBuilder.CreateTable(
                name: "Ordinances",
                columns: table => new
                {
                    OrdinanceId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OrdinanceName = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ordinances", x => x.OrdinanceId);
                });

            migrationBuilder.CreateTable(
                name: "Relationships",
                columns: table => new
                {
                    RelationshipId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RelationshipName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationships", x => x.RelationshipId);
                });

            migrationBuilder.CreateTable(
                name: "Temples",
                columns: table => new
                {
                    TempleId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TempleName = table.Column<string>(type: "TEXT", nullable: false),
                    StreetAddress = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    Zip = table.Column<string>(type: "TEXT", nullable: false),
                    Phone = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Temples", x => x.TempleId);
                });

            migrationBuilder.CreateTable(
                name: "WardContacts",
                columns: table => new
                {
                    WardId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ContactFirstName = table.Column<string>(type: "TEXT", nullable: false),
                    ContactLastName = table.Column<string>(type: "TEXT", nullable: false),
                    ContactCalling = table.Column<string>(type: "TEXT", nullable: false),
                    ContactEmail = table.Column<string>(type: "TEXT", nullable: false),
                    ContactPhone = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WardContacts", x => x.WardId);
                });

            migrationBuilder.CreateTable(
                name: "AvailableAppointments",
                columns: table => new
                {
                    AvailableAppointmentId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TempleId = table.Column<int>(type: "INTEGER", nullable: false),
                    OrdinanceId = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AvailableSeats = table.Column<int>(type: "INTEGER", nullable: false),
                    IsBooked = table.Column<bool>(type: "INTEGER", nullable: false),
                    MaxParticipants = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailableAppointments", x => x.AvailableAppointmentId);
                    table.ForeignKey(
                        name: "FK_AvailableAppointments_Ordinances_OrdinanceId",
                        column: x => x.OrdinanceId,
                        principalTable: "Ordinances",
                        principalColumn: "OrdinanceId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AvailableAppointments_Temples_TempleId",
                        column: x => x.TempleId,
                        principalTable: "Temples",
                        principalColumn: "TempleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    MembershipRecordNumber = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FamilyMemberId = table.Column<int>(type: "INTEGER", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    StreetAddress = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    ZipCode = table.Column<string>(type: "TEXT", nullable: false),
                    Country = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Phone = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "TEXT", nullable: false),
                    WardId = table.Column<int>(type: "INTEGER", nullable: false),
                    WardContactWardId = table.Column<int>(type: "INTEGER", nullable: false),
                    HomeStake = table.Column<string>(type: "TEXT", nullable: false),
                    TempleDistrict = table.Column<string>(type: "TEXT", nullable: false),
                    Gender = table.Column<bool>(type: "INTEGER", nullable: false),
                    RecommendStatus = table.Column<string>(type: "TEXT", nullable: false),
                    RecommendIssueDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    RecommendExpirationDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.MembershipRecordNumber);
                    table.ForeignKey(
                        name: "FK_Members_FamilyMembers_FamilyMemberId",
                        column: x => x.FamilyMemberId,
                        principalTable: "FamilyMembers",
                        principalColumn: "FamilyMemberId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Members_WardContacts_WardContactWardId",
                        column: x => x.WardContactWardId,
                        principalTable: "WardContacts",
                        principalColumn: "WardId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserAccounts",
                columns: table => new
                {
                    UserName = table.Column<string>(type: "TEXT", nullable: false),
                    MembershipRecordNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    MembershipRecordNumber1 = table.Column<int>(type: "INTEGER", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    PasswordHashed = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAccounts", x => x.UserName);
                    table.ForeignKey(
                        name: "FK_UserAccounts_Members_MembershipRecordNumber1",
                        column: x => x.MembershipRecordNumber1,
                        principalTable: "Members",
                        principalColumn: "MembershipRecordNumber",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    AppointmentId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TempleId = table.Column<int>(type: "INTEGER", nullable: false),
                    OrdinanceId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", nullable: false),
                    AppointmentDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AppointmentTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Confirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    Cancelled = table.Column<bool>(type: "INTEGER", nullable: false),
                    Completed = table.Column<bool>(type: "INTEGER", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.AppointmentId);
                    table.ForeignKey(
                        name: "FK_Appointments_Ordinances_OrdinanceId",
                        column: x => x.OrdinanceId,
                        principalTable: "Ordinances",
                        principalColumn: "OrdinanceId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Appointments_Temples_TempleId",
                        column: x => x.TempleId,
                        principalTable: "Temples",
                        principalColumn: "TempleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Appointments_UserAccounts_UserName",
                        column: x => x.UserName,
                        principalTable: "UserAccounts",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Companions",
                columns: table => new
                {
                    CompanionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AppointmentId = table.Column<int>(type: "INTEGER", nullable: false),
                    MembershipRecordNumber = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companions", x => x.CompanionId);
                    table.ForeignKey(
                        name: "FK_Companions_Appointments_AppointmentId",
                        column: x => x.AppointmentId,
                        principalTable: "Appointments",
                        principalColumn: "AppointmentId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Companions_Members_MembershipRecordNumber",
                        column: x => x.MembershipRecordNumber,
                        principalTable: "Members",
                        principalColumn: "MembershipRecordNumber",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_OrdinanceId",
                table: "Appointments",
                column: "OrdinanceId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_TempleId",
                table: "Appointments",
                column: "TempleId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_UserName",
                table: "Appointments",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_AvailableAppointments_OrdinanceId",
                table: "AvailableAppointments",
                column: "OrdinanceId");

            migrationBuilder.CreateIndex(
                name: "IX_AvailableAppointments_TempleId",
                table: "AvailableAppointments",
                column: "TempleId");

            migrationBuilder.CreateIndex(
                name: "IX_Companions_AppointmentId",
                table: "Companions",
                column: "AppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Companions_MembershipRecordNumber",
                table: "Companions",
                column: "MembershipRecordNumber");

            migrationBuilder.CreateIndex(
                name: "IX_Members_FamilyMemberId",
                table: "Members",
                column: "FamilyMemberId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Members_WardContactWardId",
                table: "Members",
                column: "WardContactWardId");

            migrationBuilder.CreateIndex(
                name: "IX_UserAccounts_MembershipRecordNumber1",
                table: "UserAccounts",
                column: "MembershipRecordNumber1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvailableAppointments");

            migrationBuilder.DropTable(
                name: "Companions");

            migrationBuilder.DropTable(
                name: "Relationships");

            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "Ordinances");

            migrationBuilder.DropTable(
                name: "Temples");

            migrationBuilder.DropTable(
                name: "UserAccounts");

            migrationBuilder.DropTable(
                name: "Members");

            migrationBuilder.DropTable(
                name: "FamilyMembers");

            migrationBuilder.DropTable(
                name: "WardContacts");
        }
    }
}
