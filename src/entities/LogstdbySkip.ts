import { Column, Entity, Index } from "typeorm";

@Index("LOGSTDBY$SKIP_IDX1", ["useLike", "schema", "name"], {})
@Index("LOGSTDBY$SKIP_IDX2", ["statementOpt"], {})
@Entity("LOGSTDBY$SKIP")
export class LogstdbySkip {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "ACTIVE", nullable: true })
  active: number | null;

  @Column("varchar2", { name: "PROC", nullable: true, length: 392 })
  proc: string | null;

  @Column("varchar2", { name: "ESC", nullable: true, length: 1 })
  esc: string | null;

  @Column("number", { name: "USE_LIKE", nullable: true })
  useLike: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 261 })
  name: string | null;

  @Column("varchar2", { name: "SCHEMA", nullable: true, length: 128 })
  schema: string | null;

  @Column("varchar2", { name: "STATEMENT_OPT", nullable: true, length: 128 })
  statementOpt: string | null;

  @Column("number", { name: "ERROR", nullable: true })
  error: number | null;
}
