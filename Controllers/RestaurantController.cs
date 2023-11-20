using menu_back.Models;
using menu_back.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace menu_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly IRestaurantRepository _restaurantRepository;

        public RestaurantController(IRestaurantRepository restaurantRepository)
        {
            _restaurantRepository = restaurantRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Restaurant>>> FindAllUsers()
        {
           List<Restaurant> restaurants = await _restaurantRepository.FindAll();
            return Ok(restaurants);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Restaurant>> FindById(int id)
        {
            Restaurant restaurant = await _restaurantRepository.FindById(id);
            return Ok(restaurant);
        }

        [HttpPost]
        public async Task<ActionResult<Restaurant>> Create([FromBody] Restaurant restaurant)
        {
            Restaurant restaurantCreated = await _restaurantRepository.Create(restaurant);
            return Ok(restaurantCreated);
        }

        [HttpPut]
        public async Task<ActionResult<Restaurant>> Update([FromBody] Restaurant restaurant, int id)
        {
            restaurant.Id = id;
            Restaurant restaurantUpdated = await _restaurantRepository.Update(restaurant, id);
            return Ok(restaurantUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Restaurant>> Delete(int id)
        {
            bool restaurantIsDelete = await _restaurantRepository.Delete(id);
            return Ok(restaurantIsDelete);
        }
    }
}
