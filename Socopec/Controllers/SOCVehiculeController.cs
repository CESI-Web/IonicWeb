using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Socopec.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SOCVehiculeController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "AW-689-HS", "ZF-239-HR", "RF-109-JJ", "OP-542-HH", "WW-767-GH", "WW-154-WW"
        };

        private readonly ILogger<SOCVehiculeController> _logger;

        public SOCVehiculeController(ILogger<SOCVehiculeController> logger)
        {
            _logger = logger;
        }

    [HttpGet]
    public IEnumerable<Vehicule> Get()
    {
        var rng = new Random();
        return Enumerable.Range(1, 1).Select(index => new Vehicule
        {
            VEHI_id = Convert.ToInt32(rng),
            VEHI_DateFabrication = Convert.ToDateTime("20/09/2019"),
            VEHI_Immatriculation = Summaries[rng.Next(Summaries.Length)]    
        })
        .ToArray();
    }
    }
}
