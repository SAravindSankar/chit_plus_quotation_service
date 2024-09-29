import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TABSUBPART$", ["logmnrUid", "obj", "pobj"], {})
@Index("LOGMNR_I2TABSUBPART$", ["logmnrUid", "pobj"], {})
@Entity("LOGMNR_TABSUBPART$")
export class LogmnrTabsubpart {
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

  @Column("number", { name: "TS#", precision: 22, scale: 0 })
  ts: number;

  @Column("number", {
    name: "SUBPART#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  subpart: number | null;

  @Column("number", { name: "POBJ#", nullable: true, precision: 22, scale: 0 })
  pobj: number | null;

  @Column("number", {
    name: "DATAOBJ#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dataobj: number | null;

  @Column("number", { name: "OBJ#", nullable: true, precision: 22, scale: 0 })
  obj: number | null;
}
