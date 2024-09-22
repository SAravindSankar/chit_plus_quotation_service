import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$APPLY_MILESTONE")
export class LogstdbyApplyMilestone {
  @Column("number", { name: "PTO_RECOVERY_INCARNATION", nullable: true })
  ptoRecoveryIncarnation: number | null;

  @Column("number", { name: "PTO_RECOVERY_SCN", nullable: true })
  ptoRecoveryScn: number | null;

  @Column("date", { name: "SPARE7", nullable: true })
  spare7: Date | null;

  @Column("number", { name: "SPARE6", nullable: true })
  spare6: number | null;

  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("date", { name: "LWM_UPD_TIME", nullable: true })
  lwmUpdTime: Date | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "FETCHLWM_SCN", default: () => "(0)" })
  fetchlwmScn: number;

  @Column("date", { name: "PROCESSED_TIME", nullable: true })
  processedTime: Date | null;

  @Column("number", { name: "PROCESSED_SCN" })
  processedScn: number;

  @Column("number", { name: "EPOCH" })
  epoch: number;

  @Column("number", { name: "SYNCH_SCN" })
  synchScn: number;

  @Column("date", { name: "COMMIT_TIME", nullable: true })
  commitTime: Date | null;

  @Column("number", { name: "COMMIT_SCN" })
  commitScn: number;

  @Column("number", { name: "SESSION_ID" })
  sessionId: number;
}
