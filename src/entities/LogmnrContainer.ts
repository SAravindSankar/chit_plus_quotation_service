import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1CONTAINER$", ["logmnrUid", "conId"], {})
@Entity("LOGMNR_CONTAINER$")
export class LogmnrContainer {
  @Column("number", { name: "FED_ROOT_CON_ID#", nullable: true })
  fedRootConId: number | null;

  @Column("number", { name: "VSN", nullable: true })
  vsn: number | null;

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

  @Column("number", { name: "STATUS" })
  status: number;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "CREATE_SCNBAS" })
  createScnbas: number;

  @Column("number", { name: "CREATE_SCNWRP" })
  createScnwrp: number;

  @Column("number", { name: "CON_UID" })
  conUid: number;

  @Column("number", { name: "DBID" })
  dbid: number;

  @Column("number", { name: "CON_ID#" })
  conId: number;

  @Column("number", { name: "OBJ#" })
  obj: number;
}
