using menu_back.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace menu_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantOwnerController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<RestaurantOwner>> FindAllUsers()
        {
            return Ok();
        }
    }
}
