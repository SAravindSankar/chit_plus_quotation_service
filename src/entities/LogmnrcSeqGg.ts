import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_I2SEQGG", ["logmnrUid", "dropScn"], {})
@Index("LOGMNRC_SEQ_GG_PK", ["logmnrUid", "obj", "commitScn"], { unique: true })
@Entity("LOGMNRC_SEQ_GG")
export class LogmnrcSeqGg {
  @Column("varchar2", { name: "SPARE4", nullable: true, length: 4000 })
  spare4: string | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "SEQINC", nullable: true })
  seqinc: number | null;

  @Column("number", { name: "SEQCACHE", nullable: true })
  seqcache: number | null;

  @Column("varchar2", { name: "OBJNAME", length: 384 })
  objname: string;

  @Column("varchar2", { name: "OWNERNAME", length: 384 })
  ownername: string;

  @Column("number", { name: "OWNER#" })
  owner: number;

  @Column("number", { name: "SEQ_FLAGS" })
  seqFlags: number;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { primary: true, name: "COMMIT_SCN" })
  commitScn: number;

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
