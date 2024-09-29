import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_DBNAME_UID_MAP_PK", ["globalName", "logmnrMdh"], {
  unique: true,
})
@Entity("LOGMNRC_DBNAME_UID_MAP")
export class LogmnrcDbnameUidMap {
  @Column("number", { primary: true, name: "LOGMNR_MDH" })
  logmnrMdh: number;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 384 })
  pdbName: string | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "LOGMNR_UID", nullable: true })
  logmnrUid: number | null;

  @Column("varchar2", { primary: true, name: "GLOBAL_NAME", length: 384 })
  globalName: string;
}
