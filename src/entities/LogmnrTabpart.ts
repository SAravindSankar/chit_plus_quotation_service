import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TABPART$", ["logmnrUid", "obj", "bo"], {})
@Index("LOGMNR_I2TABPART$", ["logmnrUid", "bo"], {})
@Entity("LOGMNR_TABPART$")
export class LogmnrTabpart {
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

  @Column("number", { name: "BO#", precision: 22, scale: 0 })
  bo: number;

  @Column("number", { name: "PART#", nullable: true })
  part: number | null;

  @Column("number", { name: "TS#", nullable: true, precision: 22, scale: 0 })
  ts: number | null;

  @Column("number", { name: "OBJ#", nullable: true, precision: 22, scale: 0 })
  obj: number | null;
}
