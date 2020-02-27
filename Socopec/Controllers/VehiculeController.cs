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
        public IEnumerable Get()
        {
            using (socopecContext db = new socopecContext())
            {

                var query = from Vehicule in db.Set<Vehicules>()
                            join Modele in db.Set<Modeles>()
                              on Vehicule.VehiModeId equals Modele.ModeId
                            join Agence in db.Set<Agences>()
                             on Vehicule.VehiAgecId equals Agence.AgecId
                            join Status in db.Set<Status>()
                             on Vehicule.VehiStatId equals Status.StatId
                            select new {
                                id = Vehicule.VehiId,
                                ModeleLibelle = Modele.ModeLibelle,
                                ModeleId = Modele.ModeId,
                                AgenceLibelle = Agence.AgecNom,
                                StatutLibelle = Status.StatLibelle,
                                Immatriculation = Vehicule.VehiImmatriculation

                            };


                return query.ToList();
            }        
        }
        [HttpGet]
        public IEnumerable<Agences> GetInfo()
        {
            using (socopecContext db = new socopecContext())
            {
                var InformationAgence = db.Agences.ToArray();
                return InformationAgence.ToArray();
            }

        }

    



    }
}
