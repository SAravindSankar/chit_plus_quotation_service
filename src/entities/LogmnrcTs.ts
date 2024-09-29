import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_I1TS", ["logmnrUid", "dropScn"], {})
@Index("LOGMNRC_TS_PK", ["logmnrUid", "ts", "startScn"], { unique: true })
@Entity("LOGMNRC_TS")
export class LogmnrcTs {
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

  @Column("varchar2", { name: "NAME", nullable: true, length: 90 })
  name: string | null;

  @Column("number", { primary: true, name: "TS#", precision: 22, scale: 0 })
  ts: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
