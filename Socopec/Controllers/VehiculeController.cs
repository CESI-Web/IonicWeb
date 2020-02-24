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
    public class VehiculeController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "AW-689-HS", "ZF-239-HR", "RF-109-JJ", "OP-542-HH", "WW-767-GH", "WW-154-WW"
        };

        private readonly ILogger<VehiculeController> _logger;

        public VehiculeController(ILogger<VehiculeController> logger)
        {
            _logger = logger;
        }

    [HttpGet]
    public IEnumerable<Vehicule> Get()
    {
        var rng = new Random();
        return Enumerable.Range(1, 2).Select(index => new Vehicule
        {
            VEHI_id = 4,
            VEHI_DateFabrication = DateTime.Today,
            VEHI_Immatriculation = Summaries[rng.Next(Summaries.Length)]    
        })
        .ToArray();
    }
    }
}
