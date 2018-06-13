using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace projectmanagementapplication.Migrations
{
    public partial class group2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WorkerId",
                table: "Groups",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_WorkerId",
                table: "Groups",
                column: "WorkerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Workers_WorkerId",
                table: "Groups",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Workers_WorkerId",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_WorkerId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "WorkerId",
                table: "Groups");
        }
    }
}
