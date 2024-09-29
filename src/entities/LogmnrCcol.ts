import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1CCOL$", ["logmnrUid", "con", "intcol"], {})
@Entity("LOGMNR_CCOL$")
export class LogmnrCcol {
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

  @Column("number", { name: "INTCOL#" })
  intcol: number;

  @Column("number", { name: "POS#", nullable: true })
  pos: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;

  @Column("number", { name: "CON#", nullable: true })
  con: number | null;
}
