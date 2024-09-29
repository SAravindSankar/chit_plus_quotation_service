import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TS$", ["logmnrUid", "ts"], {})
@Entity("LOGMNR_TS$")
export class LogmnrTs {
  @Column("number", { name: "START_SCNWRP", nullable: true })
  startScnwrp: number | null;

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

  @Column("number", { name: "BLOCKSIZE", precision: 22, scale: 0 })
  blocksize: number;

  @Column("number", { name: "OWNER#", nullable: true, precision: 22, scale: 0 })
  owner: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 90 })
  name: string | null;

  @Column("number", { name: "TS#", nullable: true, precision: 22, scale: 0 })
  ts: number | null;
}
