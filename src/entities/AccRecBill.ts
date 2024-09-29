import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalBill } from "./JsalBill";

@Index("RECBILLFK", ["recfk"], {})
@Index("REC_BILLPK", ["recBillpk"], { unique: true })
@Entity("ACC_REC_BILL")
export class AccRecBill {
  @Column("number", {
    primary: true,
    name: "REC_BILLPK",
    precision: 8,
    scale: 0,
  })
  recBillpk: number;

  @Column("number", { name: "RECFK", precision: 8, scale: 0 })
  recfk: number;

  @Column("number", { name: "REC_BILL_AMT", precision: 12, scale: 2 })
  recBillAmt: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "RECDOCFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  recdocfk: number | null;

  @Column("number", {
    name: "ADJ_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjDocfk: number | null;

  @Column("number", {
    name: "ADJ_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjTranDocfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @ManyToOne(() => JsalBill, (jsalBill) => jsalBill.accRecBills)
  @JoinColumn([{ name: "BILLFK", referencedColumnName: "salBillpk" }])
  billfk: JsalBill;
}
