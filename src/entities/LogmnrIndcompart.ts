import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1INDCOMPART$", ["logmnrUid", "obj"], {})
@Entity("LOGMNR_INDCOMPART$")
export class LogmnrIndcompart {
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

  @Column("number", { name: "PART#" })
  part: number;

  @Column("number", { name: "BO#", nullable: true })
  bo: number | null;

  @Column("number", { name: "DATAOBJ#", nullable: true })
  dataobj: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
