using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Modeles
    {
        public int ModeId { get; set; }
        public string ModeLebelle { get; set; }
        public int? ModeHauteur { get; set; }
        public int? ModeLongeur { get; set; }
        public int? ModeLargeur { get; set; }
        public int? ModePuissance { get; set; }
        public string ModeType { get; set; }
        public int? ModeModifUtilisateur { get; set; }
        public DateTime? ModeModifDate { get; set; }
        public int? ModeCreationUtilisateur { get; set; }
        public DateTime? ModeCreationDate { get; set; }
        public DateTime? ModeArchiveDate { get; set; }
    }
}
