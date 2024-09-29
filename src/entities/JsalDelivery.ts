import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";
import { JsalBill } from "./JsalBill";

@Index("JSAL_DELIVERYPK", ["jsalDeliverypk"], { unique: true })
@Entity("JSAL_DELIVERY")
export class JsalDelivery {
  @Column("number", {
    primary: true,
    name: "JSAL_DELIVERYPK",
    precision: 8,
    scale: 0,
  })
  jsalDeliverypk: number;

  @Column("number", { name: "BILL_NO", nullable: true, precision: 8, scale: 0 })
  billNo: number | null;

  @Column("date", { name: "BILL_DATE", nullable: true })
  billDate: Date | null;

  @Column("date", { name: "DELIVERY_DATE_TIME", nullable: true })
  deliveryDateTime: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jsalDeliveries)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @ManyToOne(() => JsalBill, (jsalBill) => jsalBill.jsalDeliveries)
  @JoinColumn([{ name: "SAL_BILLFK", referencedColumnName: "salBillpk" }])
  salBillfk: JsalBill;
}
