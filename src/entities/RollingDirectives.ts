import { Column, Entity } from "typeorm";

@Entity("ROLLING$DIRECTIVES")
export class RollingDirectives {
  @Column("varchar2", { name: "P2", nullable: true, length: 256 })
  p2: string | null;

  @Column("varchar2", { name: "P1", nullable: true, length: 256 })
  p1: string | null;

  @Column("number", { name: "OPCODE", nullable: true })
  opcode: number | null;

  @Column("varchar2", { name: "FLAGS", nullable: true, length: 64 })
  flags: string | null;

  @Column("number", { name: "TARGET", nullable: true })
  target: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 256 })
  description: string | null;

  @Column("varchar2", { name: "FEATURE", nullable: true, length: 32 })
  feature: string | null;

  @Column("number", { name: "TASKID", nullable: true })
  taskid: number | null;

  @Column("number", { name: "PHASE", nullable: true })
  phase: number | null;

  @Column("number", { name: "DIRECTID", nullable: true })
  directid: number | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 256 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "P3", nullable: true, length: 256 })
  p3: string | null;
}
