import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { JsalBill } from "./JsalBill";

@Index("BILLDET2", ["salBillfk", "accfk", "gsstkfk"], {})
@Index("BILL_DET2PK", ["billDet2Pk"], { unique: true })
@Entity("JSAL_BILL_DET2")
export class JsalBillDet2 {
  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 25 })
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
    precision: 12,
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
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("number", {
    primary: true,
    name: "BILL_DET2PK",
    precision: 8,
    scale: 0,
  })
  billDet2Pk: number;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 2 })
  typeWt: number | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jsalBillDets2)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk2: MasAccounts;

  @ManyToOne(() => JsalBill, (jsalBill) => jsalBill.jsalBillDets2)
  @JoinColumn([{ name: "SAL_BILLFK", referencedColumnName: "salBillpk" }])
  salBillfk2: JsalBill;
}
