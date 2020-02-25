using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Vehicules
    {
        public int VehiId { get; set; }
        public int VehiModeId { get; set; }
        public int VehiAgecId { get; set; }
        public int VehiStatId { get; set; }
        public DateTime VehiDateCirculation { get; set; }
        public string VehiImmatriculation { get; set; }
        public int? VehiModifUtilisateur { get; set; }
        public DateTime? VehiModifDate { get; set; }
        public int? VehiCreationUtilisateur { get; set; }
        public DateTime? VehiArchiveDate { get; set; }
    }
}
