import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1REFCON$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_REFCON$")
export class LogmnrRefcon {
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

  @Column("number", { name: "OBJ#" })
  obj: number;

  @Column("raw", { name: "EXPCTOID", nullable: true, length: 16 })
  expctoid: Buffer | null;

  @Column("raw", { name: "STABID", nullable: true, length: 16 })
  stabid: Buffer | null;

  @Column("number", { name: "REFTYP", nullable: true })
  reftyp: number | null;

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;
}
