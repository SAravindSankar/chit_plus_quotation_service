import { Column, Entity, Index } from "typeorm";

@Index("LOGSTDBY$EVENTS_IND", ["eventTime"], {})
@Index("LOGSTDBY$EVENTS_IND_SCN", ["commitScn"], {})
@Index("LOGSTDBY$EVENTS_IND_XID", ["xidusn", "xidslt", "xidsqn"], {})
@Entity("LOGSTDBY$EVENTS")
export class LogstdbyEvents {
  @Column("number", { name: "CON_ID", nullable: true })
  conId: number | null;

  @Column("varchar2", { name: "CON_NAME", nullable: true, length: 30 })
  conName: string | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "ERROR", nullable: true, length: 2000 })
  error: string | null;

  @Column("clob", { name: "FULL_EVENT", nullable: true })
  fullEvent: string | null;

  @Column("varchar2", { name: "EVENT", nullable: true, length: 2000 })
  event: string | null;

  @Column("number", { name: "ERRVAL", nullable: true })
  errval: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;

  @Column("number", { name: "COMMIT_SCN", nullable: true })
  commitScn: number | null;

  @Column("number", { name: "CURRENT_SCN", nullable: true })
  currentScn: number | null;

  @Column("timestamp", { name: "EVENT_TIME", scale: 6 })
  eventTime: Date;
}
