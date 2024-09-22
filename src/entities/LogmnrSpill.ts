import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNR_SPILL$_PK",
  [
    "session",
    "pdbid",
    "xidusn",
    "xidslt",
    "xidsqn",
    "chunk",
    "startidx",
    "endidx",
    "flag",
    "sequence",
  ],
  { unique: true }
)
@Entity("LOGMNR_SPILL$")
export class LogmnrSpill {
  @Column("number", { primary: true, name: "PDBID" })
  pdbid: number;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("blob", { name: "SPILL_DATA", nullable: true })
  spillData: Buffer | null;

  @Column("number", { primary: true, name: "SEQUENCE#" })
  sequence: number;

  @Column("number", { primary: true, name: "FLAG" })
  flag: number;

  @Column("number", { primary: true, name: "ENDIDX" })
  endidx: number;

  @Column("number", { primary: true, name: "STARTIDX" })
  startidx: number;

  @Column("number", { primary: true, name: "CHUNK" })
  chunk: number;

  @Column("number", { primary: true, name: "XIDSQN" })
  xidsqn: number;

  @Column("number", { primary: true, name: "XIDSLT" })
  xidslt: number;

  @Column("number", { primary: true, name: "XIDUSN" })
  xidusn: number;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
