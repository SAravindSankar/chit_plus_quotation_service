import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_PDB_INFO$_PK", ["logmnrDid", "logmnrMdh", "pluginScn"], {
  unique: true,
})
@Entity("LOGMNR_PDB_INFO$")
export class LogmnrPdbInfo {
  @Column("varchar2", { name: "PDB_GLOBAL_NAME", nullable: true, length: 384 })
  pdbGlobalName: string | null;

  @Column("timestamp", { name: "SPARE4", nullable: true, scale: 6 })
  spare4: Date | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "UNPLUG_SCN", nullable: true })
  unplugScn: number | null;

  @Column("number", { primary: true, name: "PLUGIN_SCN" })
  pluginScn: number;

  @Column("number", { name: "PDB_UID", nullable: true })
  pdbUid: number | null;

  @Column("number", { name: "PDB_ID", nullable: true })
  pdbId: number | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 384 })
  pdbName: string | null;

  @Column("number", { primary: true, name: "LOGMNR_MDH" })
  logmnrMdh: number;

  @Column("number", { primary: true, name: "LOGMNR_DID" })
  logmnrDid: number;
}
