import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNR_AGE_SPILL$_PK",
  ["session", "pdbid", "xidusn", "xidslt", "xidsqn", "chunk", "sequence"],
  { unique: true }
)
@Entity("LOGMNR_AGE_SPILL$")
export class LogmnrAgeSpill {
  @Column("number", { primary: true, name: "PDBID" })
  pdbid: number;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("blob", { name: "SPILL_DATA", nullable: true })
  spillData: Buffer | null;

  @Column("number", { name: "OFFSET", nullable: true })
  offset: number | null;

  @Column("number", { primary: true, name: "SEQUENCE#" })
  sequence: number;

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
