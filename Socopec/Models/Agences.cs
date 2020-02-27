using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Agences
    {
        public Agences()
        {
            Vehicules = new HashSet<Vehicules>();
        }

        public int AgecId { get; set; }
        public string AgecNom { get; set; }
        public string AgecAdresse { get; set; }
        public int AgecTelephone { get; set; }
        public int? AgecFax { get; set; }
        public int? AgecModifUtilisateur { get; set; }
        public DateTime? AgecModifDate { get; set; }
        public int? AgecCreationUtilisateur { get; set; }
        public DateTime? AgecArchiveDate { get; set; }

        public virtual ICollection<Vehicules> Vehicules { get; set; }
    }
}
