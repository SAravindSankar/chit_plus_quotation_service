import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1INDPART$", ["logmnrUid", "obj", "bo"], {})
@Index("LOGMNR_I2INDPART$", ["logmnrUid", "bo"], {})
@Entity("LOGMNR_INDPART$")
export class LogmnrIndpart {
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

  @Column("number", { name: "TS#" })
  ts: number;

  @Column("number", { name: "PART#", nullable: true })
  part: number | null;

  @Column("number", { name: "BO#", nullable: true })
  bo: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
