using menu_back.Models;

namespace menu_back.Repository.Interfaces
{
    public interface IRestaurantRepository
    {
        Task<List<Restaurant>> FindAll();
        Task<Restaurant> FindById(int id);
        Task<Restaurant> Create(Restaurant restaurant);
        Task<Restaurant> Update(Restaurant restaurant, int id);
        Task<bool> Delete(int id);
    }
}
