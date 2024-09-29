import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_SESSION_PK", ["session"], { unique: true })
@Index("LOGMNR_SESSION_UK1", ["sessionName"], { unique: true })
@Entity("LOGMNR_SESSION$")
export class LogmnrSession {
  @Column("number", { name: "SPARE9", nullable: true })
  spare9: number | null;

  @Column("varchar2", { name: "SPARE8", nullable: true, length: 1000 })
  spare8: string | null;

  @Column("varchar2", { name: "SPARE7", nullable: true, length: 1000 })
  spare7: string | null;

  @Column("date", { name: "SPARE6", nullable: true })
  spare6: Date | null;

  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "PURGE_SCN", nullable: true })
  purgeScn: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "REDO_COMPAT", nullable: true, length: 20 })
  redoCompat: string | null;

  @Column("varchar2", { name: "VERSION", nullable: true, length: 64 })
  version: string | null;

  @Column("number", { name: "BRANCH_SCN", nullable: true })
  branchScn: number | null;

  @Column("number", { name: "RESET_TIMESTAMP", nullable: true })
  resetTimestamp: number | null;

  @Column("varchar2", {
    name: "GLOBAL_DB_NAME",
    nullable: true,
    length: 384,
    default: () => "null",
  })
  globalDbName: string | null;

  @Column("number", { name: "RESUME_SCN", nullable: true })
  resumeScn: number | null;

  @Column("number", { name: "OLDEST_SCN", nullable: true })
  oldestScn: number | null;

  @Column("date", { name: "SPILL_TIME", nullable: true })
  spillTime: Date | null;

  @Column("number", { name: "SPILL_SCN", nullable: true })
  spillScn: number | null;

  @Column("number", { name: "END_SCN", nullable: true })
  endScn: number | null;

  @Column("number", { name: "START_SCN", nullable: true })
  startScn: number | null;

  @Column("varchar2", {
    name: "SESSION_ATTR_VERBOSE",
    nullable: true,
    length: 400,
  })
  sessionAttrVerbose: string | null;

  @Column("number", { name: "SESSION_ATTR", nullable: true })
  sessionAttr: number | null;

  @Column("number", { name: "RESETLOGS_CHANGE#", nullable: true })
  resetlogsChange: number | null;

  @Column("number", { name: "DB_ID", nullable: true })
  dbId: number | null;

  @Column("varchar2", { name: "SESSION_NAME", unique: true, length: 128 })
  sessionName: string;

  @Column("number", { name: "CLIENT#", nullable: true })
  client: number | null;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
