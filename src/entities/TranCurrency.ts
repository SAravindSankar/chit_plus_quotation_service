import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008550", ["tranCurrpk"], { unique: true })
@Entity("TRAN_CURRENCY")
export class TranCurrency {
  @Column("number", {
    primary: true,
    name: "TRAN_CURRPK",
    precision: 8,
    scale: 0,
  })
  tranCurrpk: number;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 5, scale: 0 })
  tranNo: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "CURRFK", nullable: true, precision: 6, scale: 0 })
  currfk: number | null;

  @Column("number", {
    name: "CURR_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  currValue: number | null;

  @Column("number", {
    name: "CON_RATE",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  conRate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("char", { name: "REC_ISS", nullable: true, length: 1 })
  recIss: string | null;

  @Column("number", {
    name: "ALD_ADJ",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  aldAdj: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "EX_RATIO",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  exRatio: number | null;

  @Column("number", {
    name: "EX_RATE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  exRate: number | null;
}
