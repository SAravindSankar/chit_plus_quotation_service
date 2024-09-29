import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$SKIP_TRANSACTION")
export class LogstdbySkipTransaction {
  @Column("varchar2", { name: "CON_NAME", nullable: true, length: 384 })
  conName: string | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "COMMIT_SCN", nullable: true })
  commitScn: number | null;

  @Column("number", { name: "ACTIVE", nullable: true })
  active: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;
}
