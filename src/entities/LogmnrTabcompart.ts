import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TABCOMPART$", ["logmnrUid", "obj"], {})
@Index("LOGMNR_I2TABCOMPART$", ["logmnrUid", "bo"], {})
@Entity("LOGMNR_TABCOMPART$")
export class LogmnrTabcompart {
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

  @Column("number", { name: "PART#", precision: 22, scale: 0 })
  part: number;

  @Column("number", { name: "BO#", nullable: true, precision: 22, scale: 0 })
  bo: number | null;

  @Column("number", { name: "OBJ#", nullable: true, precision: 22, scale: 0 })
  obj: number | null;
}
