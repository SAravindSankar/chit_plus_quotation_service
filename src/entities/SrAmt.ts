import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008334", ["srAmtpk"], { unique: true })
@Entity("SR_AMT")
export class SrAmt {
  @Column("number", { primary: true, name: "SR_AMTPK", precision: 8, scale: 0 })
  srAmtpk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 6, scale: 0 })
  tranNo: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 6, scale: 0 })
  partyfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 14, scale: 2 })
  amount: number | null;

  @Column("char", { name: "DC_IND", nullable: true, length: 1 })
  dcInd: string | null;

  @Column("number", { name: "REMFK", nullable: true, precision: 8, scale: 0 })
  remfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "TRAN_ST", nullable: true, length: 1 })
  tranSt: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

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

  @Column("varchar2", { name: "TRAN_TYPE", nullable: true, length: 40 })
  tranType: string | null;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
