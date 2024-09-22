import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1SUBCOLTYPE$", ["logmnrUid", "obj", "intcol", "toid"], {})
@Entity("LOGMNR_SUBCOLTYPE$")
export class LogmnrSubcoltype {
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

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("raw", { name: "INTCOL#S", nullable: true, length: 2000 })
  intcolS: Buffer | null;

  @Column("number", { name: "INTCOLS", nullable: true })
  intcols: number | null;

  @Column("number", { name: "VERSION#" })
  version: number;

  @Column("raw", { name: "TOID", length: 16 })
  toid: Buffer;

  @Column("number", { name: "INTCOL#" })
  intcol: number;
}
