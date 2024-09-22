import { Column, Entity } from "typeorm";

@Entity("LOGMNR_DICTSTATE$")
export class LogmnrDictstate {
  @Column("number", {
    name: "LOGMNR_FLAGS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrFlags: number | null;

  @Column("number", { name: "RBABYTE", nullable: true })
  rbabyte: number | null;

  @Column("number", { name: "RBABLK", nullable: true })
  rbablk: number | null;

  @Column("number", { name: "RBASQN", nullable: true })
  rbasqn: number | null;

  @Column("number", { name: "REDO_THREAD", nullable: true })
  redoThread: number | null;

  @Column("number", { name: "END_SCNWRP", nullable: true })
  endScnwrp: number | null;

  @Column("number", { name: "END_SCNBAS", nullable: true })
  endScnbas: number | null;

  @Column("number", { name: "START_SCNWRP", nullable: true })
  startScnwrp: number | null;

  @Column("number", { name: "START_SCNBAS", nullable: true })
  startScnbas: number | null;

  @Column("number", {
    name: "LOGMNR_UID",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrUid: number | null;
}
