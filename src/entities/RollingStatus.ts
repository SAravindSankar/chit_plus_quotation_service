import { Column, Entity } from "typeorm";

@Entity("ROLLING$STATUS")
export class RollingStatus {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "LAST_BATCHID", nullable: true })
  lastBatchid: number | null;

  @Column("number", { name: "LAST_INSTID", nullable: true })
  lastInstid: number | null;

  @Column("timestamp", { name: "FINISH_TIME", nullable: true, scale: 6 })
  finishTime: Date | null;

  @Column("timestamp", { name: "SWITCH_TIME", nullable: true, scale: 6 })
  switchTime: Date | null;

  @Column("timestamp", { name: "START_TIME", nullable: true, scale: 6 })
  startTime: Date | null;

  @Column("timestamp", { name: "BUILD_TIME", nullable: true, scale: 6 })
  buildTime: Date | null;

  @Column("timestamp", { name: "INIT_TIME", nullable: true, scale: 6 })
  initTime: Date | null;

  @Column("varchar2", { name: "LOCATION", nullable: true, length: 128 })
  location: string | null;

  @Column("number", { name: "DBACTIVE", nullable: true })
  dbactive: number | null;

  @Column("number", { name: "DBTOTAL", nullable: true })
  dbtotal: number | null;

  @Column("number", { name: "INSTANCE", nullable: true })
  instance: number | null;

  @Column("number", { name: "PID", nullable: true })
  pid: number | null;

  @Column("number", { name: "FPRIMARY", nullable: true })
  fprimary: number | null;

  @Column("number", { name: "OPRIMARY", nullable: true })
  oprimary: number | null;

  @Column("number", { name: "COORDID", nullable: true })
  coordid: number | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("number", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Column("number", { name: "PHASE", nullable: true })
  phase: number | null;

  @Column("number", { name: "REVISION", nullable: true })
  revision: number | null;
}
