using menu_back.Data;
using menu_back.Models;
using menu_back.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace menu_back.Repository
{
    public class RestaurantOwnerRepository : IRestaurantOwnerRepository
    {
        private readonly DBContext _dBContext;
        public RestaurantOwnerRepository(DBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public async Task<RestaurantOwner> Create(RestaurantOwner restaurantOwner)
        {
            await _dBContext.RestaurantOwner.AddAsync(restaurantOwner);
            await _dBContext.SaveChangesAsync();

            return restaurantOwner;
        }

        public async Task<bool> Delete(int id)
        {
            RestaurantOwner findRestaurantOwner = await FindById(id);

            if (findRestaurantOwner == null)
            {
                throw new Exception("User not found");
            }

            _dBContext.RestaurantOwner.Remove(findRestaurantOwner);
            await _dBContext.SaveChangesAsync();

            return true;
        }

        public async Task<List<RestaurantOwner>> FindAll()
        {
            return await _dBContext.RestaurantOwner.ToListAsync();

        }

        public async Task<RestaurantOwner> FindById(int id)
        {
            return await _dBContext.RestaurantOwner.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<RestaurantOwner> Update(RestaurantOwner restaurantOwner, int id)
        {
            RestaurantOwner findRestaurantOwner = await FindById(id);

            if (findRestaurantOwner == null)
            {
                throw new Exception("Restaurant owner not found");
            }

            findRestaurantOwner.Name = restaurantOwner.Name;
            findRestaurantOwner.Email = restaurantOwner.Email;

            _dBContext.RestaurantOwner.Update(findRestaurantOwner);
            await _dBContext.SaveChangesAsync();

            return findRestaurantOwner;

        }
    }
}
