import { Column, Entity, Index } from "typeorm";

@Index("TPUR_INDC", ["tpurIndcPk"], { unique: true })
@Entity("TPUR_INDC")
export class TpurIndc {
  @Column("number", {
    primary: true,
    name: "TPUR_INDC_PK",
    precision: 8,
    scale: 0,
  })
  tpurIndcPk: number;

  @Column("number", { name: "INDENT_NO", precision: 6, scale: 0 })
  indentNo: number;

  @Column("date", { name: "INDENT_DATE" })
  indentDate: Date;

  @Column("number", { name: "VENDORFK", precision: 6, scale: 0 })
  vendorfk: number;

  @Column("number", { name: "BY_WHOM", nullable: true, precision: 4, scale: 0 })
  byWhom: number | null;

  @Column("varchar2", { name: "VEN_BILL_REF", nullable: true, length: 10 })
  venBillRef: string | null;

  @Column("date", { name: "VEN_BILL_REFDATE", nullable: true })
  venBillRefdate: Date | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  advAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
