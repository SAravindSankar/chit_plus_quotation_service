import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1NTAB$", ["logmnrUid", "obj", "intcol"], {})
@Index("LOGMNR_I2NTAB$", ["logmnrUid", "ntab"], {})
@Entity("LOGMNR_NTAB$")
export class LogmnrNtab {
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

  @Column("varchar2", { name: "NAME", nullable: true, length: 4000 })
  name: string | null;

  @Column("number", { name: "NTAB#", nullable: true })
  ntab: number | null;

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;
}
