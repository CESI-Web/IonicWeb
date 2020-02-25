using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Sav
    {
        public int SavId { get; set; }
        public int SavVehiId { get; set; }
        public string SavCommentaire { get; set; }
        public int? SavResolue { get; set; }
        public int? SavModifUtilisateur { get; set; }
        public DateTime? SavModifDate { get; set; }
        public int? SavCreationUtilisateur { get; set; }
        public DateTime? SavArchiveDate { get; set; }
    }
}
