import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNRP_CTAS_PART_MAP_I",
  ["logmnrUid", "baseobj", "baseobjv", "part"],
  {}
)
@Index("LOGMNRP_CTAS_PART_MAP_PK", ["logmnrUid", "baseobjv", "keyobj"], {
  unique: true,
})
@Entity("LOGMNRP_CTAS_PART_MAP")
export class LogmnrpCtasPartMap {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 1000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "PART#" })
  part: number;

  @Column("number", { primary: true, name: "KEYOBJ#" })
  keyobj: number;

  @Column("number", { primary: true, name: "BASEOBJV#" })
  baseobjv: number;

  @Column("number", { name: "BASEOBJ#" })
  baseobj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
