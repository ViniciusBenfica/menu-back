using menu_back.Data;
using menu_back.Models;
using menu_back.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace menu_back.Repository
{
    public class RestaurantRepository : IRestaurantRepository
    {
        private readonly DBContext _dBContext;
        public RestaurantRepository(DBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public async Task<Restaurant> Create(Restaurant restaurant)
        {
            await _dBContext.Restaurant.AddAsync(restaurant);
            await _dBContext.SaveChangesAsync();

            return restaurant;
        }

        public async Task<bool> Delete(int id)
        {
            Restaurant findRestaurant = await FindById(id);

            if (findRestaurant == null)
            {
                throw new Exception("Restaurant not found");
            }

            _dBContext.Restaurant.Remove(findRestaurant);
            await _dBContext.SaveChangesAsync();

            return true;
        }

        public async Task<List<Restaurant>> FindAll()
        {
            return await _dBContext.Restaurant.Include(x => x.RestaurantOwner).ToListAsync();

        }

        public async Task<Restaurant> FindById(int id)
        {
            return await _dBContext.Restaurant.Include(x => x.RestaurantOwner).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Restaurant> Update(Restaurant restaurant, int id)
        {
            Restaurant findRestaurant = await FindById(id);

            if (findRestaurant == null)
            {
                throw new Exception("Restaurant not found");
            }

            findRestaurant.Name = restaurant.Name;
            findRestaurant.RestaurantOwnerId = restaurant.RestaurantOwnerId;

            _dBContext.Restaurant.Update(findRestaurant);
            await _dBContext.SaveChangesAsync();

            return findRestaurant;

        }
    }
}
