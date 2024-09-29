import { Column, Entity } from "typeorm";

@Entity("ROLLING$PLAN")
export class RollingPlan {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 256 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "POST_STATUS", nullable: true })
  postStatus: number | null;

  @Column("timestamp", { name: "FINISH_TIME", nullable: true, scale: 6 })
  finishTime: Date | null;

  @Column("timestamp", { name: "EXEC_TIME", nullable: true, scale: 6 })
  execTime: Date | null;

  @Column("varchar2", { name: "EXEC_INFO", nullable: true, length: 256 })
  execInfo: string | null;

  @Column("number", { name: "EXEC_STATUS", nullable: true })
  execStatus: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 256 })
  description: string | null;

  @Column("varchar2", { name: "P4", nullable: true, length: 256 })
  p4: string | null;

  @Column("varchar2", { name: "P3", nullable: true, length: 256 })
  p3: string | null;

  @Column("varchar2", { name: "P2", nullable: true, length: 256 })
  p2: string | null;

  @Column("varchar2", { name: "P1", nullable: true, length: 256 })
  p1: string | null;

  @Column("number", { name: "OPCODE", nullable: true })
  opcode: number | null;

  @Column("number", { name: "RFLAGS", nullable: true })
  rflags: number | null;

  @Column("number", { name: "TARGET", nullable: true })
  target: number | null;

  @Column("number", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("number", { name: "PROGRESS", nullable: true })
  progress: number | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("number", { name: "PHASE", nullable: true })
  phase: number | null;

  @Column("number", { name: "REVISION", nullable: true })
  revision: number | null;

  @Column("number", { name: "TASKID", nullable: true })
  taskid: number | null;

  @Column("number", { name: "DIRECTID", nullable: true })
  directid: number | null;

  @Column("number", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Column("number", { name: "INSTID", nullable: true })
  instid: number | null;
}
