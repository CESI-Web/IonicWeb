using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Localisations
    {
        public int LocaId { get; set; }
        public int LocaVehiId { get; set; }
        public int LocaAgentId { get; set; }
        public int? LocaModifUtilisateur { get; set; }
        public DateTime? LocaModifDate { get; set; }
        public int? LocaCreationUtilisateur { get; set; }
        public DateTime? LocaCreationDate { get; set; }
        public DateTime? LocaArchiveDate { get; set; }
    }
}
