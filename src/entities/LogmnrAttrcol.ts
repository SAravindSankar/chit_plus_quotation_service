import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1ATTRCOL$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_ATTRCOL$")
export class LogmnrAttrcol {
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

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;
}
