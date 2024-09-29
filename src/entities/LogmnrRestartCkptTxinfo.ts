import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNR_RESTART_CKPT_TXINFO$_PK",
  [
    "session",
    "xidusn",
    "xidslt",
    "xidsqn",
    "sessionNum",
    "serialNum",
    "effectiveScn",
  ],
  { unique: true }
)
@Entity("LOGMNR_RESTART_CKPT_TXINFO$")
export class LogmnrRestartCkptTxinfo {
  @Column("blob", { name: "TX_DATA", nullable: true })
  txData: Buffer | null;

  @Column("number", { name: "OFFSET", nullable: true })
  offset: number | null;

  @Column("number", { primary: true, name: "EFFECTIVE_SCN" })
  effectiveScn: number;

  @Column("number", { name: "START_SCN", nullable: true })
  startScn: number | null;

  @Column("number", { name: "FLAG", nullable: true })
  flag: number | null;

  @Column("number", { primary: true, name: "SERIAL_NUM" })
  serialNum: number;

  @Column("number", { primary: true, name: "SESSION_NUM" })
  sessionNum: number;

  @Column("number", { primary: true, name: "XIDSQN" })
  xidsqn: number;

  @Column("number", { primary: true, name: "XIDSLT" })
  xidslt: number;

  @Column("number", { primary: true, name: "XIDUSN" })
  xidusn: number;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
