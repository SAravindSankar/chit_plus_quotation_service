import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1ICOL$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_ICOL$")
export class LogmnrIcol {
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

  @Column("number", { name: "SEGCOL#", nullable: true })
  segcol: number | null;

  @Column("number", { name: "POS#", nullable: true })
  pos: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;

  @Column("number", { name: "BO#", nullable: true })
  bo: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
