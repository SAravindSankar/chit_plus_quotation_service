import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1LOB$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_LOB$")
export class LogmnrLob {
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

  @Column("number", { name: "CHUNK" })
  chunk: number;

  @Column("number", { name: "LOBJ#", nullable: true })
  lobj: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
