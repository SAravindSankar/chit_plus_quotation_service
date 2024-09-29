import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1COL$", ["logmnrUid", "obj", "intcol"], {})
@Index("LOGMNR_I2COL$", ["logmnrUid", "obj", "name"], {})
@Index("LOGMNR_I3COL$", ["logmnrUid", "obj", "col"], {})
@Entity("LOGMNR_COL$")
export class LogmnrCol {
  @Column("number", { name: "ACDRRESCOL#", nullable: true })
  acdrrescol: number | null;

  @Column("number", { name: "COLLINTCOL#", nullable: true })
  collintcol: number | null;

  @Column("number", { name: "COLLID", nullable: true })
  collid: number | null;

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

  @Column("number", { name: "OBJ#", precision: 22, scale: 0 })
  obj: number;

  @Column("number", { name: "SPARE2", nullable: true, precision: 22, scale: 0 })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true, precision: 22, scale: 0 })
  spare1: number | null;

  @Column("number", {
    name: "CHARSETFORM",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  charsetform: number | null;

  @Column("number", {
    name: "CHARSETID",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  charsetid: number | null;

  @Column("number", {
    name: "PROPERTY",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  property: number | null;

  @Column("number", {
    name: "INTCOL#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  intcol: number | null;

  @Column("number", { name: "NULL$", nullable: true, precision: 22, scale: 0 })
  null: number | null;

  @Column("number", { name: "SCALE", nullable: true, precision: 22, scale: 0 })
  scale: number | null;

  @Column("number", {
    name: "PRECISION#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  precision: number | null;

  @Column("number", { name: "LENGTH", nullable: true, precision: 22, scale: 0 })
  length: number | null;

  @Column("number", { name: "TYPE#", nullable: true, precision: 22, scale: 0 })
  type: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 384 })
  name: string | null;

  @Column("number", {
    name: "SEGCOL#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  segcol: number | null;

  @Column("number", { name: "COL#", nullable: true, precision: 22, scale: 0 })
  col: number | null;
}
