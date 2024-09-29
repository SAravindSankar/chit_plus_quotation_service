import { Column, Entity, Index } from "typeorm";

@Index("BITTACCDOCFK", ["docfk"], {})
@Index("SYS_C008543", ["tranAccpk"], { unique: true })
@Index("TRANACCFK", ["glaccfk"], {})
@Index("TRANBRANCH", ["branchfk"], {})
@Index("TRANPARTY", ["partyfk"], {})
@Entity("TRAN_ACC")
export class TranAcc {
  @Column("number", {
    primary: true,
    name: "TRAN_ACCPK",
    precision: 8,
    scale: 0,
  })
  tranAccpk: number;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("char", { name: "RP_IND", nullable: true, length: 1 })
  rpInd: string | null;

  @Column("char", { name: "DC_IND", nullable: true, length: 1 })
  dcInd: string | null;

  @Column("char", { name: "DOC_IND", nullable: true, length: 1 })
  docInd: string | null;

  @Column("char", { name: "TRAN_ST", nullable: true, length: 1 })
  tranSt: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 6, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "GLACCFK", nullable: true, precision: 6, scale: 0 })
  glaccfk: number | null;

  @Column("number", { name: "SLACCFK", nullable: true, precision: 6, scale: 0 })
  slaccfk: number | null;

  @Column("number", {
    name: "CASH_BANKFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  cashBankfk: number | null;

  @Column("char", { name: "TRAN_CD", nullable: true, length: 1 })
  tranCd: string | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 6, scale: 0 })
  tranNo: number | null;

  @Column("varchar2", { name: "NARRATION", nullable: true, length: 200 })
  narration: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "TRAN_TYPE", nullable: true, length: 1 })
  tranType: string | null;

  @Column("char", { name: "CHQDD_TYPE", nullable: true, length: 1 })
  chqddType: string | null;

  @Column("char", { name: "CHQ_NO", nullable: true, length: 10 })
  chqNo: string | null;

  @Column("date", { name: "CHQ_DATE", nullable: true })
  chqDate: Date | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  guarantorfk: number | null;
}
