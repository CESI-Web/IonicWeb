using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Vehicules
    {
        public Vehicules()
        {
            HistoriqueVehicules = new HashSet<HistoriqueVehicules>();
            Sav = new HashSet<Sav>();
        }

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

        public virtual Agences VehiAgec { get; set; }
        public virtual Modeles VehiMode { get; set; }
        public virtual Status VehiStat { get; set; }
        public virtual ICollection<HistoriqueVehicules> HistoriqueVehicules { get; set; }
        public virtual ICollection<Sav> Sav { get; set; }
    }
}
