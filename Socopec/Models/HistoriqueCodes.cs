using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class HistoriqueCodes
    {
        public int HistCodeId { get; set; }
        public string HistCodeLibelle { get; set; }
        public int? HistModifUtilisateur { get; set; }
        public DateTime? HistModifDate { get; set; }
        public int? HistCreationUtilisateur { get; set; }
        public DateTime? HistArchiveDate { get; set; }
    }
}
