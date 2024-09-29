import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRGGC_GTCS_PK", ["logmnrUid", "obj", "objv", "intcol"], {
  unique: true,
})
@Index("LOGMNRGGC_I2GTCS", ["logmnrUid", "obj", "objv", "segcol", "intcol"], {})
@Entity("LOGMNRGGC_GTCS")
export class LogmnrggcGtcs {
  @Column("number", { name: "XTOPINTCOL", nullable: true })
  xtopintcol: number | null;

  @Column("varchar2", { name: "XFQCOLNAME", nullable: true, length: 4000 })
  xfqcolname: string | null;

  @Column("varchar2", { name: "XTYPENAME", nullable: true, length: 4000 })
  xtypename: string | null;

  @Column("varchar2", { name: "XTYPESCHEMANAME", nullable: true, length: 384 })
  xtypeschemaname: string | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;

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

  @Column("number", { name: "ADTORDER", nullable: true })
  adtorder: number | null;

  @Column("number", { name: "NUMATTRS", nullable: true })
  numattrs: number | null;

  @Column("number", { name: "NUMINTCOLS", nullable: true })
  numintcols: number | null;

  @Column("varchar2", { name: "FQCOLNAME", nullable: true, length: 4000 })
  fqcolname: string | null;

  @Column("varchar2", { name: "TYPENAME", nullable: true, length: 384 })
  typename: string | null;

  @Column("number", { name: "CHARSETFORM", nullable: true })
  charsetform: number | null;

  @Column("number", { name: "CHARSETID", nullable: true })
  charsetid: number | null;

  @Column("raw", { name: "TOID", nullable: true, length: 16 })
  toid: Buffer | null;

  @Column("number", { name: "PROPERTY", nullable: true })
  property: number | null;

  @Column("number", { name: "INTERVAL_TRAILING_PRECISION", nullable: true })
  intervalTrailingPrecision: number | null;

  @Column("number", { name: "INTERVAL_LEADING_PRECISION", nullable: true })
  intervalLeadingPrecision: number | null;

  @Column("number", { name: "SCALE", nullable: true })
  scale: number | null;

  @Column("number", { name: "PRECISION", nullable: true })
  precision: number | null;

  @Column("number", { name: "LENGTH", nullable: true })
  length: number | null;

  @Column("number", { name: "TYPE#" })
  type: number;

  @Column("varchar2", { name: "COLNAME", length: 384 })
  colname: string;

  @Column("number", { primary: true, name: "INTCOL#" })
  intcol: number;

  @Column("number", { name: "SEGCOL#" })
  segcol: number;

  @Column("number", { primary: true, name: "OBJV#" })
  objv: number;

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;

  @Column("number", { name: "ACDRRESCOL#", nullable: true })
  acdrrescol: number | null;

  @Column("number", { name: "COLLINTCOL#", nullable: true })
  collintcol: number | null;

  @Column("number", { name: "COLLID", nullable: true })
  collid: number | null;

  @Column("number", { name: "LOGMNRDERIVEDFLAGS", nullable: true })
  logmnrderivedflags: number | null;

  @Column("number", { name: "EAFLAGS", nullable: true })
  eaflags: number | null;

  @Column("number", { name: "EAKLCLEN", nullable: true })
  eaklclen: number | null;

  @Column("raw", { name: "EACOLKLC", nullable: true, length: 2000 })
  eacolklc: Buffer | null;

  @Column("number", { name: "EAINTALG", nullable: true })
  eaintalg: number | null;

  @Column("number", { name: "EAENCALG", nullable: true })
  eaencalg: number | null;

  @Column("varchar2", { name: "EAMKEYID", nullable: true, length: 192 })
  eamkeyid: string | null;

  @Column("number", { name: "EAOWNER#", nullable: true })
  eaowner: number | null;

  @Column("number", { name: "XXMLINTCOL", nullable: true })
  xxmlintcol: number | null;

  @Column("number", { name: "XOPQOBJINTCOL", nullable: true })
  xopqobjintcol: number | null;

  @Column("number", { name: "XOPQLOBINTCOL", nullable: true })
  xopqlobintcol: number | null;

  @Column("number", { name: "XOPQTYPEFLAGS", nullable: true })
  xopqtypeflags: number | null;

  @Column("number", { name: "XOPQTYPETYPE", nullable: true })
  xopqtypetype: number | null;

  @Column("number", { name: "XCOLTYPEFLAGS", nullable: true })
  xcoltypeflags: number | null;

  @Column("number", { name: "XREFFEDTABLEOBJV", nullable: true })
  xreffedtableobjv: number | null;

  @Column("number", { name: "XREFFEDTABLEOBJN", nullable: true })
  xreffedtableobjn: number | null;
}
