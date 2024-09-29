import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1OPQTYPE$", ["logmnrUid", "obj", "intcol"], {})
@Entity("LOGMNR_OPQTYPE$")
export class LogmnrOpqtype {
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

  @Column("varchar2", { name: "SCHEMAURL", nullable: true, length: 4000 })
  schemaurl: string | null;

  @Column("number", { name: "ELEMNUM", nullable: true })
  elemnum: number | null;

  @Column("raw", { name: "SCHEMAOID", nullable: true, length: 16 })
  schemaoid: Buffer | null;

  @Column("number", { name: "EXTRACOL", nullable: true })
  extracol: number | null;

  @Column("number", { name: "OBJCOL", nullable: true })
  objcol: number | null;

  @Column("number", { name: "LOBCOL", nullable: true })
  lobcol: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "TYPE", nullable: true })
  type: number | null;

  @Column("number", { name: "INTCOL#" })
  intcol: number;
}
