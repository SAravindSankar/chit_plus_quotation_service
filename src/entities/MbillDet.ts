import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { JsalBill } from "./JsalBill";

@Entity("MBILL_DET")
export class MbillDet {
  //DB_ERROR -> PK
  @Column("number", {
    primary: true,
    name: "MBILL_DETPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  mbillDetpk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "NARRATION", nullable: true, length: 100 })
  narration: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.mbillDets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => JsalBill, (jsalBill) => jsalBill.mbillDets)
  @JoinColumn([{ name: "SAL_BILLFK", referencedColumnName: "salBillpk" }])
  salBillfk: JsalBill;
}
