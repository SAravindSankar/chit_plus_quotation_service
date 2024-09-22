import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$PLSQL")
export class LogstdbyPlsql {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("clob", { name: "CALL_TEXT", nullable: true })
  callText: string | null;

  @Column("number", { name: "START_FINISH", nullable: true })
  startFinish: number | null;

  @Column("number", { name: "SESSION_ID", nullable: true })
  sessionId: number | null;
}
