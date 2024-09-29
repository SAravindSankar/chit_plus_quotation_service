import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$APPLY_PROGRESS")
export class LogstdbyApplyProgress {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("date", { name: "COMMIT_TIME", nullable: true })
  commitTime: Date | null;

  @Column("number", { name: "COMMIT_SCN", nullable: true })
  commitScn: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;
}
