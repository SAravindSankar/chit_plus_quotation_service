import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1IDNSEQ$", ["logmnrUid", "obj", "intcol"], {})
@Index("LOGMNR_I2IDNSEQ$", ["logmnrUid", "seqobj"], {})
@Entity("LOGMNR_IDNSEQ$")
export class LogmnrIdnseq {
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

  @Column("number", { name: "STARTWITH" })
  startwith: number;

  @Column("number", { name: "SEQOBJ#" })
  seqobj: number;

  @Column("number", { name: "INTCOL#" })
  intcol: number;

  @Column("number", { name: "OBJ#" })
  obj: number;
}
