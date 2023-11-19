namespace menu_back.Models
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? RestaurantOwnerId {  get; set; }
        public virtual RestaurantOwner? RestaurantOwner { get; set; }

    }
}
