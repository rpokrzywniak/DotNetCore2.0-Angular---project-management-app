using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace projectmanagementapplication.Migrations
{
    public partial class group4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Groups",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Groups");
        }
    }
}
