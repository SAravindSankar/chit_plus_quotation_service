import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1LOGMNR_BUILDLOG", ["logmnrUid", "initialXid"], {})
@Entity("LOGMNR_LOGMNR_BUILDLOG")
export class LogmnrLogmnrBuildlog {
  @Column("varchar2", { name: "SPARE2", nullable: true, length: 4000 })
  spare2: string | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "CDB_XID", nullable: true, length: 22 })
  cdbXid: string | null;

  @Column("number", {
    name: "LOGMNR_FLAGS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrFlags: number | null;

  @Column("number", {
    name: "LOGMNR_UID",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrUid: number | null;

  @Column("varchar2", { name: "INITIAL_XID", length: 22 })
  initialXid: string;

  @Column("number", { name: "MARKED_LOG_FILE_LOW_SCN", nullable: true })
  markedLogFileLowScn: number | null;

  @Column("number", { name: "COMPLETION_STATUS", nullable: true })
  completionStatus: number | null;

  @Column("number", { name: "CURRENT_BUILD_STATE", nullable: true })
  currentBuildState: number | null;

  @Column("number", { name: "DB_TXN_SCNWRP", nullable: true })
  dbTxnScnwrp: number | null;

  @Column("number", { name: "DB_TXN_SCNBAS", nullable: true })
  dbTxnScnbas: number | null;

  @Column("varchar2", { name: "BUILD_DATE", nullable: true, length: 20 })
  buildDate: string | null;
}
