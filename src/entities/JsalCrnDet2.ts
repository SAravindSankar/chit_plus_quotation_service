import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalCrn } from "./JsalCrn";
import { MasAccounts } from "./MasAccounts";

@Index("CRN_DET2PK", ["crnDet2Pk"], { unique: true })
@Entity("JSAL_CRN_DET2")
export class JsalCrnDet2 {
  @Column("number", {
    primary: true,
    name: "CRN_DET2PK",
    precision: 8,
    scale: 0,
  })
  crnDet2Pk: number;

  @Column("varchar2", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", { name: "PER_AGE", nullable: true, precision: 5, scale: 2 })
  perAge: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalCrn, (jsalCrn) => jsalCrn.jsalCrnDets2)
  @JoinColumn([{ name: "CRNFK", referencedColumnName: "crnpk" }])
  crnfk: JsalCrn;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jsalCrnDets2)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;
}
