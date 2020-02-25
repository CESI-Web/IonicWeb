using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Socopec.Models
{
    public partial class socopecContext : DbContext
    {
        public socopecContext()
        {
        }

        public socopecContext(DbContextOptions<socopecContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Agences> Agences { get; set; }
        public virtual DbSet<Agents> Agents { get; set; }
        public virtual DbSet<Droits> Droits { get; set; }
        public virtual DbSet<HistoriqueCodes> HistoriqueCodes { get; set; }
        public virtual DbSet<HistoriqueVehicules> HistoriqueVehicules { get; set; }
        public virtual DbSet<Localisations> Localisations { get; set; }
        public virtual DbSet<Modeles> Modeles { get; set; }
        public virtual DbSet<Sav> Sav { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Vehicules> Vehicules { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=82.64.159.75,12033;Initial Catalog=socopec;User ID=sa;Password=Password!7757;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agences>(entity =>
            {
                entity.HasKey(e => e.AgecId)
                    .HasName("PK__AGENCES__DF5C4FA1AD08864A");

                entity.ToTable("AGENCES");

                entity.Property(e => e.AgecId).HasColumnName("AGEC_Id");

                entity.Property(e => e.AgecAdresse)
                    .IsRequired()
                    .HasColumnName("AGEC_Adresse")
                    .HasMaxLength(255);

                entity.Property(e => e.AgecArchiveDate).HasColumnName("AGEC_Archive_Date");

                entity.Property(e => e.AgecCreationUtilisateur).HasColumnName("AGEC_Creation_Utilisateur");

                entity.Property(e => e.AgecFax).HasColumnName("AGEC_Fax");

                entity.Property(e => e.AgecModifDate).HasColumnName("AGEC_Modif_Date");

                entity.Property(e => e.AgecModifUtilisateur).HasColumnName("AGEC_Modif_Utilisateur");

                entity.Property(e => e.AgecNom)
                    .IsRequired()
                    .HasColumnName("AGEC_Nom")
                    .HasMaxLength(1);

                entity.Property(e => e.AgecTelephone).HasColumnName("AGEC_Telephone");
            });

            modelBuilder.Entity<Agents>(entity =>
            {
                entity.HasKey(e => e.AgetId)
                    .HasName("PK__AGENTS__52FFD80FDA4B1933");

                entity.ToTable("AGENTS");

                entity.Property(e => e.AgetId).HasColumnName("AGET_Id");

                entity.Property(e => e.AgetArchiveDate).HasColumnName("AGET_Archive_Date");

                entity.Property(e => e.AgetCreationUtilisateur).HasColumnName("AGET_Creation_Utilisateur");

                entity.Property(e => e.AgetDroiId).HasColumnName("AGET_DROI_Id");

                entity.Property(e => e.AgetEmail)
                    .IsRequired()
                    .HasColumnName("AGET_Email")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.AgetModifDate).HasColumnName("AGET_Modif_Date");

                entity.Property(e => e.AgetModifUtilisateur).HasColumnName("AGET_Modif_Utilisateur");

                entity.Property(e => e.AgetNom)
                    .IsRequired()
                    .HasColumnName("AGET_Nom")
                    .HasMaxLength(255);

                entity.Property(e => e.AgetPassword)
                    .IsRequired()
                    .HasColumnName("AGET_Password")
                    .HasMaxLength(1);

                entity.Property(e => e.AgetPrenom)
                    .IsRequired()
                    .HasColumnName("AGET_Prenom")
                    .HasMaxLength(255);

                entity.Property(e => e.AgetTelephone).HasColumnName("AGET_Telephone");
            });

            modelBuilder.Entity<Droits>(entity =>
            {
                entity.HasKey(e => e.DroiId)
                    .HasName("PK__DROITS__EF3F8F833F018318");

                entity.ToTable("DROITS");

                entity.Property(e => e.DroiId).HasColumnName("DROI_Id");

                entity.Property(e => e.DroiAddVehi)
                    .HasColumnName("DROI_AddVehi")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiArchiveDate)
                    .HasColumnName("DROI_Archive_date")
                    .HasColumnType("date");

                entity.Property(e => e.DroiCreationDate)
                    .HasColumnName("DROI_Creation_Date")
                    .HasColumnType("date");

                entity.Property(e => e.DroiCreationUtilisateur).HasColumnName("DROI_Creation_Utilisateur");

                entity.Property(e => e.DroiDef)
                    .HasColumnName("DROI_Def")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiDefStatus)
                    .HasColumnName("DROI_DefStatus")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiDelVehi)
                    .HasColumnName("DROI_DelVehi")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiGet)
                    .HasColumnName("DROI_Get")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiLibelle)
                    .HasColumnName("DROI_Libelle")
                    .HasMaxLength(255);

                entity.Property(e => e.DroiModifDate)
                    .HasColumnName("DROI_Modif_Date")
                    .HasColumnType("date");

                entity.Property(e => e.DroiModifUtilisateur).HasColumnName("DROI_Modif_Utilisateur");

                entity.Property(e => e.DroiUpdateVehi)
                    .HasColumnName("DROI_UpdateVehi")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<HistoriqueCodes>(entity =>
            {
                entity.HasKey(e => e.HistCodeId)
                    .HasName("PK__HISTORIQ__522DCEC6DF874D12");

                entity.ToTable("HISTORIQUE_CODES");

                entity.Property(e => e.HistCodeId).HasColumnName("HIST_CODE_Id");

                entity.Property(e => e.HistArchiveDate).HasColumnName("HIST_Archive_Date");

                entity.Property(e => e.HistCodeLibelle)
                    .IsRequired()
                    .HasColumnName("HIST_CODE_Libelle")
                    .HasMaxLength(255);

                entity.Property(e => e.HistCreationUtilisateur).HasColumnName("HIST_Creation_Utilisateur");

                entity.Property(e => e.HistModifDate).HasColumnName("HIST_Modif_Date");

                entity.Property(e => e.HistModifUtilisateur).HasColumnName("HIST_Modif_Utilisateur");
            });

            modelBuilder.Entity<HistoriqueVehicules>(entity =>
            {
                entity.HasKey(e => e.HistoId)
                    .HasName("PK__HISTORIQ__E6CA8646052901C4");

                entity.ToTable("HISTORIQUE_VEHICULES");

                entity.Property(e => e.HistoId).HasColumnName("HISTO_ID");

                entity.Property(e => e.HistoAgentId).HasColumnName("HISTO_AGENT_Id");

                entity.Property(e => e.HistoArchiveDate)
                    .HasColumnName("HISTO_Archive_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.HistoCreationDate)
                    .HasColumnName("HISTO_Creation_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.HistoCreationUtilisateur).HasColumnName("HISTO_Creation_utilisateur");

                entity.Property(e => e.HistoDate)
                    .HasColumnName("HISTO_Date")
                    .HasColumnType("date");

                entity.Property(e => e.HistoModifDate)
                    .HasColumnName("HISTO_Modif_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.HistoModifUtilisateur).HasColumnName("HISTO_Modif_utilisateur");

                entity.Property(e => e.HistoVehiId).HasColumnName("HISTO_VEHI_Id");
            });

            modelBuilder.Entity<Localisations>(entity =>
            {
                entity.HasKey(e => e.LocaId)
                    .HasName("PK__LOCALISA__0CAEC80865A81E1F");

                entity.ToTable("LOCALISATIONS");

                entity.Property(e => e.LocaId).HasColumnName("LOCA_Id");

                entity.Property(e => e.LocaAgentId).HasColumnName("LOCA_AGENT_Id");

                entity.Property(e => e.LocaArchiveDate)
                    .HasColumnName("LOCA_Archive_date")
                    .HasColumnType("date");

                entity.Property(e => e.LocaCreationDate)
                    .HasColumnName("LOCA_Creation_Date")
                    .HasColumnType("date");

                entity.Property(e => e.LocaCreationUtilisateur).HasColumnName("LOCA_Creation_Utilisateur");

                entity.Property(e => e.LocaModifDate)
                    .HasColumnName("LOCA_Modif_Date")
                    .HasColumnType("date");

                entity.Property(e => e.LocaModifUtilisateur).HasColumnName("LOCA_Modif_Utilisateur");

                entity.Property(e => e.LocaVehiId).HasColumnName("LOCA_VEHI_Id");
            });

            modelBuilder.Entity<Modeles>(entity =>
            {
                entity.HasKey(e => e.ModeId)
                    .HasName("PK__MODELES__1F38D6AFBD66BB22");

                entity.ToTable("MODELES");

                entity.Property(e => e.ModeId).HasColumnName("MODE_Id");

                entity.Property(e => e.ModeArchiveDate)
                    .HasColumnName("MODE_Archive_date")
                    .HasColumnType("date");

                entity.Property(e => e.ModeCreationDate)
                    .HasColumnName("MODE_Creation_Date")
                    .HasColumnType("date");

                entity.Property(e => e.ModeCreationUtilisateur).HasColumnName("MODE_Creation_Utilisateur");

                entity.Property(e => e.ModeHauteur).HasColumnName("MODE_Hauteur");

                entity.Property(e => e.ModeLargeur).HasColumnName("MODE_Largeur");

                entity.Property(e => e.ModeLebelle)
                    .HasColumnName("MODE_Lebelle")
                    .HasMaxLength(255);

                entity.Property(e => e.ModeLongeur).HasColumnName("MODE_Longeur");

                entity.Property(e => e.ModeModifDate)
                    .HasColumnName("MODE_Modif_Date")
                    .HasColumnType("date");

                entity.Property(e => e.ModeModifUtilisateur).HasColumnName("MODE_Modif_Utilisateur");

                entity.Property(e => e.ModePuissance).HasColumnName("MODE_Puissance");

                entity.Property(e => e.ModeType)
                    .HasColumnName("MODE_Type")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Sav>(entity =>
            {
                entity.ToTable("SAV");

                entity.Property(e => e.SavId).HasColumnName("SAV_Id");

                entity.Property(e => e.SavArchiveDate).HasColumnName("SAV_Archive_Date");

                entity.Property(e => e.SavCommentaire)
                    .HasColumnName("SAV_Commentaire")
                    .HasMaxLength(255);

                entity.Property(e => e.SavCreationUtilisateur).HasColumnName("SAV_Creation_Utilisateur");

                entity.Property(e => e.SavModifDate).HasColumnName("SAV_Modif_Date");

                entity.Property(e => e.SavModifUtilisateur).HasColumnName("SAV_Modif_Utilisateur");

                entity.Property(e => e.SavResolue).HasColumnName("SAV_Resolue");

                entity.Property(e => e.SavVehiId).HasColumnName("SAV_VEHI_Id");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.HasKey(e => e.StatId)
                    .HasName("PK__STATUS__7B67B46B9203C5E1");

                entity.ToTable("STATUS");

                entity.Property(e => e.StatId).HasColumnName("STAT_Id");

                entity.Property(e => e.StatArchiveDate)
                    .HasColumnName("STAT_Archive_date")
                    .HasColumnType("date");

                entity.Property(e => e.StatCreationDate)
                    .HasColumnName("STAT_Creation_Date")
                    .HasColumnType("date");

                entity.Property(e => e.StatCreationUtilisateur).HasColumnName("STAT_Creation_Utilisateur");

                entity.Property(e => e.StatLibelle)
                    .HasColumnName("STAT_Libelle")
                    .HasMaxLength(255);

                entity.Property(e => e.StatModifDate)
                    .HasColumnName("STAT_Modif_Date")
                    .HasColumnType("date");

                entity.Property(e => e.StatModifUtilisateur).HasColumnName("STAT_Modif_Utilisateur");
            });

            modelBuilder.Entity<Vehicules>(entity =>
            {
                entity.HasKey(e => e.VehiId)
                    .HasName("PK__VEHICULE__FE66BEA032B7C8B7");

                entity.ToTable("VEHICULES");

                entity.HasIndex(e => e.VehiImmatriculation)
                    .HasName("U_Immat")
                    .IsUnique();

                entity.Property(e => e.VehiId).HasColumnName("VEHI_Id");

                entity.Property(e => e.VehiAgecId).HasColumnName("VEHI_AGEC_Id");

                entity.Property(e => e.VehiArchiveDate).HasColumnName("VEHI_Archive_Date");

                entity.Property(e => e.VehiCreationUtilisateur).HasColumnName("VEHI_Creation_Utilisateur");

                entity.Property(e => e.VehiDateCirculation).HasColumnName("VEHI_Date_Circulation");

                entity.Property(e => e.VehiImmatriculation)
                    .IsRequired()
                    .HasColumnName("VEHI_Immatriculation")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.VehiModeId).HasColumnName("VEHI_MODE_Id");

                entity.Property(e => e.VehiModifDate).HasColumnName("VEHI_Modif_Date");

                entity.Property(e => e.VehiModifUtilisateur).HasColumnName("VEHI_Modif_Utilisateur");

                entity.Property(e => e.VehiStatId).HasColumnName("VEHI_STAT_Id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
