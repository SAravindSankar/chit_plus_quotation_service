import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";

@Index("BILLDET14", ["billDet1Fk", "accfk"], {})
@Index("JBILL_DET14PK", ["billDet14Pk"], { unique: true })
@Entity("JSAL_BILL_DET14")
export class JsalBillDet14 {
  @Column("number", {
    primary: true,
    name: "BILL_DET14PK",
    precision: 8,
    scale: 0,
  })
  billDet14Pk: number;

  @Column("number", {
    name: "BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDet1Fk: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  addRateAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "HUIDNO", nullable: true, length: 15 })
  huidno: string | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jsalBillDets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk2: MasAccounts;
}
