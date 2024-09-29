import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_I1TSPART", ["logmnrUid", "dropScn"], {})
@Index("LOGMNRC_TSPART_PK", ["logmnrUid", "obj", "startScn"], { unique: true })
@Entity("LOGMNRC_TSPART")
export class LogmnrcTspart {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { primary: true, name: "START_SCN" })
  startScn: number;

  @Column("number", { name: "TS#" })
  ts: number;

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
