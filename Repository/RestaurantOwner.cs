using menu_back.Data;
using menu_back.Repository.Interfaces;

namespace menu_back.Repository
{
    public class RestaurantOwner : IRestaurantOwnerRepository
    {
        private readonly DBContext _dBContext;
        public RestaurantOwner(DBContext dBContext)
        {
            _dBContext = dBContext;
        }
        public Task<RestaurantOwner> Create(RestaurantOwner restaurantOwner)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<RestaurantOwner>> FindAll()
        {
            throw new NotImplementedException();
        }

        public Task<RestaurantOwner> FindById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<RestaurantOwner> Update(RestaurantOwner restaurantOwner, int id)
        {
            throw new NotImplementedException();
        }
    }
}
