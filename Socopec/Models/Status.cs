using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Status
    {
        public Status()
        {
            Vehicules = new HashSet<Vehicules>();
        }

        public int StatId { get; set; }
        public string StatLibelle { get; set; }
        public int? StatModifUtilisateur { get; set; }
        public DateTime? StatModifDate { get; set; }
        public int? StatCreationUtilisateur { get; set; }
        public DateTime? StatCreationDate { get; set; }
        public DateTime? StatArchiveDate { get; set; }

        public virtual ICollection<Vehicules> Vehicules { get; set; }
    }
}
