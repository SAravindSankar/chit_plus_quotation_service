import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007438", ["jcpk"], { unique: true })
@Entity("ACC_JV_CONT")
export class AccJvCont {
  @Column("number", { primary: true, name: "JCPK", precision: 8, scale: 0 })
  jcpk: number;

  @Column("number", { name: "JC_NO", nullable: true, precision: 6, scale: 0 })
  jcNo: number | null;

  @Column("date", { name: "JC_DATE", nullable: true })
  jcDate: Date | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", { name: "BANKFK", nullable: true, precision: 6, scale: 0 })
  bankfk: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", {
    name: "CHQINVFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  chqinvfk: number | null;

  @Column("varchar2", { name: "NARRATION", nullable: true, length: 200 })
  narration: string | null;

  @Column("char", { name: "JC_IND", nullable: true, length: 1 })
  jcInd: string | null;

  @Column("char", { name: "JC_ST", nullable: true, length: 1 })
  jcSt: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DR_AMT", nullable: true, precision: 12, scale: 2 })
  drAmt: number | null;

  @Column("number", { name: "CR_AMT", nullable: true, precision: 12, scale: 2 })
  crAmt: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 8,
    scale: 0,
    default: () => "6",
  })
  counterfk: number | null;
}
