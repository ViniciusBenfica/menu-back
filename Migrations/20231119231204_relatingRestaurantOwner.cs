using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace menu_back.Migrations
{
    /// <inheritdoc />
    public partial class relatingRestaurantOwner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RestaurantOwnerId",
                table: "Restaurant",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Restaurant_RestaurantOwnerId",
                table: "Restaurant",
                column: "RestaurantOwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Restaurant_RestaurantOwner_RestaurantOwnerId",
                table: "Restaurant",
                column: "RestaurantOwnerId",
                principalTable: "RestaurantOwner",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Restaurant_RestaurantOwner_RestaurantOwnerId",
                table: "Restaurant");

            migrationBuilder.DropIndex(
                name: "IX_Restaurant_RestaurantOwnerId",
                table: "Restaurant");

            migrationBuilder.DropColumn(
                name: "RestaurantOwnerId",
                table: "Restaurant");
        }
    }
}
