import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_PROCESSED_LOG$_PK", ["session", "thread"], { unique: true })
@Entity("LOGMNR_PROCESSED_LOG$")
export class LogmnrProcessedLog {
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

  @Column("number", { name: "FIRST_CHANGE#", nullable: true })
  firstChange: number | null;

  @Column("number", { name: "SEQUENCE#", nullable: true })
  sequence: number | null;

  @Column("number", { primary: true, name: "THREAD#" })
  thread: number;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;

  @Column("date", { name: "TIMESTAMP", nullable: true })
  timestamp: Date | null;

  @Column("varchar2", { name: "INFO", nullable: true, length: 32 })
  info: string | null;
}
