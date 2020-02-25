using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Socopec.Models;

namespace Socopec.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehiculeController : ControllerBase
    {

        private readonly ILogger<VehiculeController> _logger;

        public VehiculeController(ILogger<VehiculeController> logger)
        {
            _logger = logger;
        }

         public void GetDataFromDB()
        {

             
        }

        [HttpGet]
        public IEnumerable<Vehicules> Get()
        {
            using (socopecContext db = new socopecContext())
            {
                var Information = db.Vehicules.ToArray();

                return Information.ToArray();
            }        
        }






    }
}
