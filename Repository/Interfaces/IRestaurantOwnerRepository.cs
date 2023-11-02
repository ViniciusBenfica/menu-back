using menu_back.Models;

namespace menu_back.Repository.Interfaces
{
    public interface IRestaurantOwnerRepository
    {
        Task<List<RestaurantOwner>> FindAll();
        Task<RestaurantOwner> FindById(int id);
        Task<RestaurantOwner> Create(RestaurantOwner restaurantOwner);
        Task<RestaurantOwner> Update(RestaurantOwner restaurantOwner, int id);
        Task<bool> Delete(int id);
    }
}
