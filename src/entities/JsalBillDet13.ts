import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalBillDet1 } from "./JsalBillDet1";

@Index("JBILL_DET13PK", ["billDet13Pk"], { unique: true })
@Entity("JSAL_BILL_DET13")
export class JsalBillDet13 {
  @Column("number", {
    primary: true,
    name: "BILL_DET13PK",
    precision: 8,
    scale: 0,
  })
  billDet13Pk: number;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 15 })
  serialNo: string | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

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

  @ManyToOne(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.jsalBillDets3)
  @JoinColumn([{ name: "BILL_DET1FK", referencedColumnName: "billDet1Pk" }])
  billDet1Fk: JsalBillDet1;
}
