import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_UID$_PK", ["logmnrUid"], { unique: true })
@Entity("LOGMNR_UID$")
export class LogmnrUid {
  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "END_SCN", nullable: true })
  endScn: number | null;

  @Column("number", { name: "START_SCN", nullable: true })
  startScn: number | null;

  @Column("number", { name: "PDB_UID", nullable: true })
  pdbUid: number | null;

  @Column("number", { name: "PDB_ID", nullable: true })
  pdbId: number | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 384 })
  pdbName: string | null;

  @Column("number", { name: "LOGMNR_MDH", nullable: true })
  logmnrMdh: number | null;

  @Column("number", { name: "LOGMNR_DID", nullable: true })
  logmnrDid: number | null;

  @Column("number", {
    primary: true,
    name: "LOGMNR_UID",
    precision: 22,
    scale: 0,
  })
  logmnrUid: number;

  @Column("timestamp", { name: "SPARE4", nullable: true, scale: 6 })
  spare4: Date | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;
}
