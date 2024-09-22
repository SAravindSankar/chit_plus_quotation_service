import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_LOG$_FIRST_CHANGE#", ["firstChange"], {})
@Index("LOGMNR_LOG$_FLAGS", ["flags"], {})
@Index(
  "LOGMNR_LOG$_PK",
  [
    "session",
    "thread",
    "sequence",
    "firstChange",
    "dbId",
    "resetlogsChange",
    "resetTimestamp",
  ],
  { unique: true }
)
@Index("LOGMNR_LOG$_PURGE_IDX1", ["fileName", "status"], {})
@Index(
  "LOGMNR_LOG$_PURGE_IDX2",
  ["session", "resetTimestamp", "nextChange", "status"],
  {}
)
@Index("LOGMNR_LOG$_RECID", ["recid"], {})
@Entity("LOGMNR_LOG$")
export class LogmnrLog {
  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "MARK_DELETE_TIMESTAMP", nullable: true })
  markDeleteTimestamp: number | null;

  @Column("number", { name: "RECSTAMP", nullable: true })
  recstamp: number | null;

  @Column("number", { name: "RECID", nullable: true })
  recid: number | null;

  @Column("number", { name: "CONTENTS", nullable: true })
  contents: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "BLOCK_SIZE", nullable: true })
  blockSize: number | null;

  @Column("number", { name: "BLOCKS", nullable: true })
  blocks: number | null;

  @Column("number", { name: "PREV_RESET_TIMESTAMP", nullable: true })
  prevResetTimestamp: number | null;

  @Column("number", { name: "PREV_RESETLOGS_CHANGE#", nullable: true })
  prevResetlogsChange: number | null;

  @Column("number", { primary: true, name: "RESET_TIMESTAMP" })
  resetTimestamp: number;

  @Column("number", { primary: true, name: "RESETLOGS_CHANGE#" })
  resetlogsChange: number;

  @Column("number", { primary: true, name: "DB_ID" })
  dbId: number;

  @Column("varchar2", { name: "STATUS_INFO", nullable: true, length: 32 })
  statusInfo: string | null;

  @Column("varchar2", { name: "DICT_END", nullable: true, length: 3 })
  dictEnd: string | null;

  @Column("varchar2", { name: "DICT_BEGIN", nullable: true, length: 3 })
  dictBegin: string | null;

  @Column("date", { name: "TIMESTAMP", nullable: true })
  timestamp: Date | null;

  @Column("varchar2", { name: "INFO", nullable: true, length: 32 })
  info: string | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("varchar2", { name: "FILE_NAME", nullable: true, length: 513 })
  fileName: string | null;

  @Column("date", { name: "NEXT_TIME", nullable: true })
  nextTime: Date | null;

  @Column("date", { name: "FIRST_TIME", nullable: true })
  firstTime: Date | null;

  @Column("number", { name: "NEXT_CHANGE#", nullable: true })
  nextChange: number | null;

  @Column("number", { primary: true, name: "FIRST_CHANGE#" })
  firstChange: number;

  @Column("number", { primary: true, name: "SEQUENCE#" })
  sequence: number;

  @Column("number", { primary: true, name: "THREAD#" })
  thread: number;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
