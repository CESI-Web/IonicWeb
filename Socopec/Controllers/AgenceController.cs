using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Socopec.Models;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Socopec.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AgenceController : ControllerBase
    {

        private readonly ILogger<VehiculeController> _logger;

        public AgenceController(ILogger<VehiculeController> logger)
        {
            _logger = logger;
        }

        public void GetDataFromDB()
        {


        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (socopecContext db = new socopecContext())
            {

                var query = from Agence in db.Set<Agences>()
                            
                            select new
                            {
                                Agence
                            };


                return query.ToList();
            }
        }







    }
}
