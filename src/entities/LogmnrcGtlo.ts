import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_GTLO_PK", ["logmnrUid", "keyobj", "baseobjv"], { unique: true })
@Index("LOGMNRC_I2GTLO", ["logmnrUid", "baseobj", "baseobjv"], {})
@Index("LOGMNRC_I3GTLO", ["logmnrUid", "dropScn"], {})
@Entity("LOGMNRC_GTLO")
export class LogmnrcGtlo {
  @Column("number", { name: "ACDRROWTSINTCOL#", nullable: true })
  acdrrowtsintcol: number | null;

  @Column("number", { name: "ACDRTSOBJ#", nullable: true })
  acdrtsobj: number | null;

  @Column("number", { name: "ACDRFLAGS", nullable: true })
  acdrflags: number | null;

  @Column("varchar2", { name: "LOGMNRMCV", nullable: true, length: 30 })
  logmnrmcv: string | null;

  @Column("number", { name: "LOGMNRTLOFLAGS", nullable: true })
  logmnrtloflags: number | null;

  @Column("number", { name: "NTPARENTINTCOLNUM", nullable: true })
  ntparentintcolnum: number | null;

  @Column("number", { name: "NTPARENTOBJVERSION", nullable: true })
  ntparentobjversion: number | null;

  @Column("number", { name: "NTPARENTOBJNUM", nullable: true })
  ntparentobjnum: number | null;

  @Column("number", { name: "COMPLEXTYPECOLS", nullable: true })
  complextypecols: number | null;

  @Column("number", { name: "UNSUPPORTEDCOLS", nullable: true })
  unsupportedcols: number | null;

  @Column("number", { name: "SUBPARTTYPE", nullable: true })
  subparttype: number | null;

  @Column("number", { name: "PARTTYPE", nullable: true })
  parttype: number | null;

  @Column("number", { name: "LOGMNR_SPARE9", nullable: true })
  logmnrSpare9: number | null;

  @Column("number", { name: "LOGMNR_SPARE8", nullable: true })
  logmnrSpare8: number | null;

  @Column("number", { name: "LOGMNR_SPARE7", nullable: true })
  logmnrSpare7: number | null;

  @Column("number", { name: "LOGMNR_SPARE6", nullable: true })
  logmnrSpare6: number | null;

  @Column("number", { name: "LOGMNR_SPARE5", nullable: true })
  logmnrSpare5: number | null;

  @Column("date", { name: "LOGMNR_SPARE4", nullable: true })
  logmnrSpare4: Date | null;

  @Column("varchar2", { name: "LOGMNR_SPARE3", nullable: true, length: 1000 })
  logmnrSpare3: string | null;

  @Column("number", { name: "LOGMNR_SPARE2", nullable: true })
  logmnrSpare2: number | null;

  @Column("number", { name: "LOGMNR_SPARE1", nullable: true })
  logmnrSpare1: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { name: "START_SCN" })
  startScn: number;

  @Column("number", { name: "PROPERTY", nullable: true })
  property: number | null;

  @Column("varchar2", { name: "TSNAME", nullable: true, length: 90 })
  tsname: string | null;

  @Column("number", { name: "TS#", nullable: true })
  ts: number | null;

  @Column("number", { name: "OBJ_FLAGS", nullable: true })
  objFlags: number | null;

  @Column("number", { name: "ASSOC#", nullable: true })
  assoc: number | null;

  @Column("number", { name: "TRIGFLAG", nullable: true })
  trigflag: number | null;

  @Column("number", { name: "TAB_FLAGS", nullable: true })
  tabFlags: number | null;

  @Column("number", { name: "KERNELCOLS", nullable: true })
  kernelcols: number | null;

  @Column("number", { name: "COLS", nullable: true })
  cols: number | null;

  @Column("number", { name: "INTCOLS" })
  intcols: number;

  @Column("varchar2", { name: "LVL2NAME", nullable: true, length: 384 })
  lvl2Name: string | null;

  @Column("varchar2", { name: "LVL1NAME", nullable: true, length: 384 })
  lvl1Name: string | null;

  @Column("varchar2", { name: "LVL0NAME", length: 384 })
  lvl0Name: string;

  @Column("varchar2", { name: "OWNERNAME", length: 384 })
  ownername: string;

  @Column("number", { name: "OWNER#", nullable: true })
  owner: number | null;

  @Column("number", { name: "LVL2TYPE#", nullable: true })
  lvl2Type: number | null;

  @Column("number", { name: "LVL1TYPE#", nullable: true })
  lvl1Type: number | null;

  @Column("number", { name: "LVL0TYPE#" })
  lvl0Type: number;

  @Column("number", { name: "LVL2OBJ#", nullable: true })
  lvl2Obj: number | null;

  @Column("number", { name: "LVL1OBJ#", nullable: true })
  lvl1Obj: number | null;

  @Column("number", { primary: true, name: "BASEOBJV#" })
  baseobjv: number;

  @Column("number", { name: "BASEOBJ#" })
  baseobj: number;

  @Column("number", { name: "LVLCNT" })
  lvlcnt: number;

  @Column("number", { primary: true, name: "KEYOBJ#" })
  keyobj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
