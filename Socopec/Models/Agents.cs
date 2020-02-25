using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Agents
    {
        public int AgetId { get; set; }
        public string AgetNom { get; set; }
        public string AgetPrenom { get; set; }
        public int AgetTelephone { get; set; }
        public string AgetEmail { get; set; }
        public string AgetPassword { get; set; }
        public int AgetDroiId { get; set; }
        public int? AgetModifUtilisateur { get; set; }
        public DateTime? AgetModifDate { get; set; }
        public int? AgetCreationUtilisateur { get; set; }
        public DateTime? AgetArchiveDate { get; set; }
    }
}
