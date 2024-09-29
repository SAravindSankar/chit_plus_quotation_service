import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNR_RESTART_CKPT$_PK",
  [
    "session",
    "ckptScn",
    "xidusn",
    "xidslt",
    "xidsqn",
    "pdbid",
    "sessionNum",
    "serialNum",
  ],
  { unique: true }
)
@Entity("LOGMNR_RESTART_CKPT$")
export class LogmnrRestartCkpt {
  @Column("number", { primary: true, name: "PDBID" })
  pdbid: number;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("blob", { name: "CLIENT_DATA", nullable: true })
  clientData: Buffer | null;

  @Column("number", { name: "OFFSET", nullable: true })
  offset: number | null;

  @Column("number", { name: "FLAG", nullable: true })
  flag: number | null;

  @Column("blob", { name: "CKPT_INFO", nullable: true })
  ckptInfo: Buffer | null;

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

  @Column("number", { primary: true, name: "CKPT_SCN" })
  ckptScn: number;

  @Column("number", { name: "VALID", nullable: true })
  valid: number | null;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
