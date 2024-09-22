import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_CON_GG_PK", ["logmnrUid", "con", "commitScn"], { unique: true })
@Index("LOGMNRC_I1CONGG", ["logmnrUid", "baseobj", "baseobjv", "commitScn"], {})
@Index("LOGMNRC_I2CONGG", ["logmnrUid", "dropScn"], {})
@Entity("LOGMNRC_CON_GG")
export class LogmnrcConGg {
  @Column("varchar2", { name: "SPARE6", nullable: true, length: 4000 })
  spare6: string | null;

  @Column("varchar2", { name: "SPARE5", nullable: true, length: 4000 })
  spare5: string | null;

  @Column("varchar2", { name: "SPARE4", nullable: true, length: 4000 })
  spare4: string | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "INDEXOBJ#", nullable: true })
  indexobj: number | null;

  @Column("number", { name: "FLAGS" })
  flags: number;

  @Column("number", { name: "BASEOBJV#" })
  baseobjv: number;

  @Column("number", { name: "BASEOBJ#" })
  baseobj: number;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { primary: true, name: "COMMIT_SCN" })
  commitScn: number;

  @Column("varchar2", { name: "NAME", length: 384 })
  name: string;

  @Column("number", { primary: true, name: "CON#" })
  con: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
