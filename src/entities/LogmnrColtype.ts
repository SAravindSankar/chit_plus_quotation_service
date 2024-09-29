import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1COLTYPE$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_COLTYPE$")
export class LogmnrColtype {
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

  @Column("number", { name: "SYNOBJ#", nullable: true })
  synobj: number | null;

  @Column("number", { name: "TYPIDCOL#", nullable: true })
  typidcol: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("raw", { name: "INTCOL#S", nullable: true, length: 2000 })
  intcolS: Buffer | null;

  @Column("number", { name: "INTCOLS", nullable: true })
  intcols: number | null;

  @Column("number", { name: "PACKED", nullable: true })
  packed: number | null;

  @Column("number", { name: "VERSION#", nullable: true })
  version: number | null;

  @Column("raw", { name: "TOID", nullable: true, length: 16 })
  toid: Buffer | null;

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;
}
