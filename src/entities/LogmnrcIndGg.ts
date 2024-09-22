import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_I1INDGG", ["logmnrUid", "baseobj", "baseobjv", "commitScn"], {})
@Index("LOGMNRC_I2INDGG", ["logmnrUid", "dropScn"], {})
@Index("LOGMNRC_IND_GG_PK", ["logmnrUid", "obj", "commitScn"], { unique: true })
@Entity("LOGMNRC_IND_GG")
export class LogmnrcIndGg {
  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;

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

  @Column("varchar2", { name: "OWNERNAME", length: 384 })
  ownername: string;

  @Column("number", { name: "OWNER#" })
  owner: number;

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

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;
}
