import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1CDEF$", ["logmnrUid", "con"], {})
@Index("LOGMNR_I2CDEF$", ["logmnrUid", "robj"], {})
@Index("LOGMNR_I3CDEF$", ["logmnrUid", "obj"], {})
@Entity("LOGMNR_CDEF$")
export class LogmnrCdef {
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

  @Column("number", { name: "DEFER", nullable: true })
  defer: number | null;

  @Column("number", { name: "ENABLED", nullable: true })
  enabled: number | null;

  @Column("number", { name: "RCON#", nullable: true })
  rcon: number | null;

  @Column("number", { name: "ROBJ#", nullable: true })
  robj: number | null;

  @Column("number", { name: "TYPE#", nullable: true })
  type: number | null;

  @Column("number", { name: "COLS", nullable: true })
  cols: number | null;

  @Column("number", { name: "CON#", nullable: true })
  con: number | null;
}
