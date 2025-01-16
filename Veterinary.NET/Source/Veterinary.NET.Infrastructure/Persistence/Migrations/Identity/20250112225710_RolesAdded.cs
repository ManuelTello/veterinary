using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Veterinary.NET.Infrastructure.Persistence.Migrations.Identity
{
    /// <inheritdoc />
    public partial class RolesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO AspNetRoles (Id,Name,NormalizedName) VALUES ('1','doctor','DOCTOR')");
            migrationBuilder.Sql("INSERT INTO AspNetRoles (Id,Name,NormalizedName) VALUES ('2','user','USER')");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}