import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$HISTORY")
export class LogstdbyHistory {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "DGNAME", nullable: true, length: 255 })
  dgname: string | null;

  @Column("date", { name: "LAST_TIME", nullable: true })
  lastTime: Date | null;

  @Column("date", { name: "FIRST_TIME", nullable: true })
  firstTime: Date | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("number", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("number", { name: "LAST_CHANGE#", nullable: true })
  lastChange: number | null;

  @Column("number", { name: "FIRST_CHANGE#", nullable: true })
  firstChange: number | null;

  @Column("number", { name: "DBID", nullable: true })
  dbid: number | null;

  @Column("number", { name: "LMNR_SID", nullable: true })
  lmnrSid: number | null;

  @Column("number", { name: "STREAM_SEQUENCE#", nullable: true })
  streamSequence: number | null;
}
