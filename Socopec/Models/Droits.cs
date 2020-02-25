using System;
using System.Collections.Generic;

namespace Socopec.Models
{
    public partial class Droits
    {
        public int DroiId { get; set; }
        public string DroiLibelle { get; set; }
        public string DroiAddVehi { get; set; }
        public string DroiDelVehi { get; set; }
        public string DroiUpdateVehi { get; set; }
        public string DroiGet { get; set; }
        public string DroiDefStatus { get; set; }
        public string DroiDef { get; set; }
        public int? DroiModifUtilisateur { get; set; }
        public DateTime? DroiModifDate { get; set; }
        public int? DroiCreationUtilisateur { get; set; }
        public DateTime? DroiCreationDate { get; set; }
        public DateTime? DroiArchiveDate { get; set; }
    }
}
