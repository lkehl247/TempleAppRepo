using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MakeUserNameNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_UserAccounts_UserName",
                table: "Appointments");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "Appointments",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_UserAccounts_UserName",
                table: "Appointments",
                column: "UserName",
                principalTable: "UserAccounts",
                principalColumn: "UserName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_UserAccounts_UserName",
                table: "Appointments");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "Appointments",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_UserAccounts_UserName",
                table: "Appointments",
                column: "UserName",
                principalTable: "UserAccounts",
                principalColumn: "UserName",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
