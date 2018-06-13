using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace projectmanagementapplication.Migrations
{
    public partial class group : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Group",
                table: "Students",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Group",
                table: "Students");
        }
    }
}
