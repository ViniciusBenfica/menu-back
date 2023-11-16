using menu_back.Models;
using menu_back.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace menu_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantOwnerController : ControllerBase
    {
        private readonly IRestaurantOwnerRepository _restaurantOwnerRepository;

        public RestaurantOwnerController(IRestaurantOwnerRepository restaurantOwnerRepository)
        {
            _restaurantOwnerRepository = restaurantOwnerRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<RestaurantOwner>>> FindAllUsers()
        {
           List<RestaurantOwner> restaurantOwners = await _restaurantOwnerRepository.FindAll();
            return Ok(restaurantOwners);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RestaurantOwner>> FindById(int id)
        {
            RestaurantOwner restaurantOwner = await _restaurantOwnerRepository.FindById(id);
            return Ok(restaurantOwner);
        }

        [HttpPost]
        public async Task<ActionResult<RestaurantOwner>> Create([FromBody] RestaurantOwner restaurantOwner)
        {
            RestaurantOwner restaurantOwnerCreated = await _restaurantOwnerRepository.Create(restaurantOwner);
            return Ok(restaurantOwnerCreated);
        }

        [HttpPut]
        public async Task<ActionResult<RestaurantOwner>> Update([FromBody] RestaurantOwner restaurantOwner, int id)
        {
            restaurantOwner.Id = id;
            RestaurantOwner restaurantOwnerUpdated = await _restaurantOwnerRepository.Update(restaurantOwner, id);
            return Ok(restaurantOwnerUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<RestaurantOwner>> Delete(int id)
        {
            bool restaurantOwnerIsDelete = await _restaurantOwnerRepository.Delete(id);
            return Ok(restaurantOwnerIsDelete);
        }
    }
}
