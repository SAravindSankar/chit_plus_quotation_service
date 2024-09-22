import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1CON$", ["logmnrUid", "con"], {})
@Entity("LOGMNR_CON$")
export class LogmnrCon {
  @Column("number", { name: "START_SCNBAS", nullable: true })
  startScnbas: number | null;

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

  @Column("number", { name: "CON#" })
  con: number;

  @Column("varchar2", { name: "NAME", length: 384 })
  name: string;

  @Column("number", { name: "OWNER#" })
  owner: number;

  @Column("number", { name: "START_SCNWRP", nullable: true })
  startScnwrp: number | null;
}
