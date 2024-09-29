import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1IND$", ["logmnrUid", "obj"], {})
@Index("LOGMNR_I2IND$", ["logmnrUid", "bo"], {})
@Entity("LOGMNR_IND$")
export class LogmnrInd {
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

  @Column("number", { name: "PROPERTY", nullable: true })
  property: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "TYPE#", nullable: true, precision: 22, scale: 0 })
  type: number | null;

  @Column("number", { name: "COLS", nullable: true, precision: 22, scale: 0 })
  cols: number | null;

  @Column("number", { name: "BO#", nullable: true, precision: 22, scale: 0 })
  bo: number | null;
}
