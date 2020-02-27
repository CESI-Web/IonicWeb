using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class HistoriqueVehicules
    {
        public int HistoId { get; set; }
        public int HistoVehiId { get; set; }
        public int HistoAgentId { get; set; }
        public DateTime? HistoDate { get; set; }
        public int? HistoModifUtilisateur { get; set; }
        public DateTime? HistoModifDate { get; set; }
        public int? HistoCreationUtilisateur { get; set; }
        public DateTime? HistoCreationDate { get; set; }
        public DateTime? HistoArchiveDate { get; set; }

        public virtual Agents HistoAgent { get; set; }
        public virtual Vehicules HistoVehi { get; set; }
    }
}
