import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_SESSION_ACTION$_PK", ["logmnrsession", "actionname"], {
  unique: true,
})
@Entity("LOGMNR_SESSION_ACTIONS$")
export class LogmnrSessionActions {
  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 390 })
  pdbName: string | null;

  @Column("number", { name: "PDBID", nullable: true })
  pdbid: number | null;

  @Column("varchar2", { name: "SPARE4", nullable: true, length: 2000 })
  spare4: string | null;

  @Column("timestamp", { name: "SPARE3", nullable: true, scale: 6 })
  spare3: Date | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "ATTR3", nullable: true })
  attr3: number | null;

  @Column("number", { name: "ATTR2", nullable: true })
  attr2: number | null;

  @Column("number", { name: "ATTR1", nullable: true })
  attr1: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;

  @Column("number", { name: "SESSION#", nullable: true })
  session: number | null;

  @Column("number", { name: "RBABYTE", nullable: true })
  rbabyte: number | null;

  @Column("number", { name: "RBABLK", nullable: true })
  rbablk: number | null;

  @Column("number", { name: "RBASQN", nullable: true })
  rbasqn: number | null;

  @Column("number", { name: "ENDSUBSCN", nullable: true })
  endsubscn: number | null;

  @Column("number", { name: "ENDSCN", nullable: true })
  endscn: number | null;

  @Column("number", { name: "STARTSUBSCN", nullable: true })
  startsubscn: number | null;

  @Column("number", { name: "STARTSCN", nullable: true })
  startscn: number | null;

  @Column("number", { name: "THREAD#", nullable: true })
  thread: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;

  @Column("timestamp", { name: "CREATETIME", nullable: true, scale: 6 })
  createtime: Date | null;

  @Column("number", { name: "FLAGSDEFINETIME", nullable: true })
  flagsdefinetime: number | null;

  @Column("number", { name: "ACTIONTYPE#" })
  actiontype: number;

  @Column("number", { name: "PROCESSROLE#" })
  processrole: number;

  @Column("number", { primary: true, name: "LOGMNRSESSION#" })
  logmnrsession: number;

  @Column("varchar2", { primary: true, name: "ACTIONNAME", length: 30 })
  actionname: string;

  @Column("number", { name: "LCRCOUNT", nullable: true, default: () => "0" })
  lcrcount: number | null;

  @Column("timestamp", { name: "DROPTIME", nullable: true, scale: 6 })
  droptime: Date | null;

  @Column("timestamp", { name: "DISPATCHTIME", nullable: true, scale: 6 })
  dispatchtime: Date | null;

  @Column("timestamp", { name: "MODIFYTIME", nullable: true, scale: 6 })
  modifytime: Date | null;

  @Column("number", { name: "DROPSCN", nullable: true })
  dropscn: number | null;

  @Column("number", {
    name: "FLAGSRUNTIME",
    nullable: true,
    default: () => "0",
  })
  flagsruntime: number | null;
}
