import { Column, Entity } from "typeorm";

@Entity("TDAY_ISSVOU")
export class TdayIssvou {
  @Column("number", {
    name: "ISS_VOUPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVoupk: number | null;

  @Column("number", {
    name: "ISS_VOU_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVouNo: number | null;

  @Column("date", { name: "ISS_VOU_DATE", nullable: true })
  issVouDate: Date | null;

  @Column("varchar2", { name: "ISS_VOU_TYPE", nullable: true, length: 20 })
  issVouType: string | null;

  @Column("char", { name: "ISS_VOU_ST", nullable: true, length: 1 })
  issVouSt: string | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("date", { name: "REM_DATE", nullable: true })
  remDate: Date | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("char", { name: "REPAIR", nullable: true, length: 1 })
  repair: string | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("char", { name: "FOR_ISS", nullable: true, length: 1 })
  forIss: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("char", { name: "SELECTED", nullable: true, length: 1 })
  selected: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "BILL_TYPE", nullable: true, length: 1 })
  billType: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "NET_AMT", nullable: true, precision: 4, scale: 0 })
  netAmt: number | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 50 })
  refNo: string | null;
}
