import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TAB$", ["logmnrUid", "obj"], {})
@Index("LOGMNR_I2TAB$", ["logmnrUid", "bobj"], {})
@Entity("LOGMNR_TAB$")
export class LogmnrTab {
  @Column("number", { name: "ACDRROWTSINTCOL#", nullable: true })
  acdrrowtsintcol: number | null;

  @Column("number", { name: "ACDRTSOBJ#", nullable: true })
  acdrtsobj: number | null;

  @Column("number", { name: "ACDRFLAGS", nullable: true })
  acdrflags: number | null;

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

  @Column("number", { name: "FLAGS", nullable: true, precision: 22, scale: 0 })
  flags: number | null;

  @Column("number", {
    name: "TRIGFLAG",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  trigflag: number | null;

  @Column("number", { name: "BOBJ#", nullable: true, precision: 22, scale: 0 })
  bobj: number | null;

  @Column("number", {
    name: "KERNELCOLS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  kernelcols: number | null;

  @Column("number", {
    name: "INTCOLS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  intcols: number | null;

  @Column("number", { name: "PROPERTY", nullable: true })
  property: number | null;

  @Column("number", { name: "COLS", nullable: true, precision: 22, scale: 0 })
  cols: number | null;

  @Column("number", { name: "TS#", nullable: true, precision: 22, scale: 0 })
  ts: number | null;
}
