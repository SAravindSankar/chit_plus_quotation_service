import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1OBJ$", ["logmnrUid", "obj"], {})
@Index("LOGMNR_I2OBJ$", ["logmnrUid", "oid"], {})
@Index("LOGMNR_I3OBJ$", ["logmnrUid", "name"], {})
@Entity("LOGMNR_OBJ$")
export class LogmnrObj {
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

  @Column("number", { name: "OBJ#", precision: 22, scale: 0 })
  obj: number;

  @Column("date", { name: "STIME", nullable: true })
  stime: Date | null;

  @Column("number", { name: "SPARE3", nullable: true, precision: 22, scale: 0 })
  spare3: number | null;

  @Column("number", { name: "FLAGS", nullable: true, precision: 22, scale: 0 })
  flags: number | null;

  @Column("varchar2", { name: "LINKNAME", nullable: true, length: 384 })
  linkname: string | null;

  @Column("varchar2", { name: "REMOTEOWNER", nullable: true, length: 384 })
  remoteowner: string | null;

  @Column("raw", { name: "OID$", nullable: true, length: 16 })
  oid: Buffer | null;

  @Column("number", { name: "TYPE#", nullable: true, precision: 22, scale: 0 })
  type: number | null;

  @Column("varchar2", { name: "SUBNAME", nullable: true, length: 384 })
  subname: string | null;

  @Column("number", {
    name: "NAMESPACE",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  namespace: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 384 })
  name: string | null;

  @Column("number", { name: "OWNER#", nullable: true, precision: 22, scale: 0 })
  owner: number | null;

  @Column("number", { name: "OBJV#", nullable: true, precision: 22, scale: 0 })
  objv: number | null;
}
