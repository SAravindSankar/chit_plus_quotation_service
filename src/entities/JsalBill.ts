import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AccRecBill } from "./AccRecBill";
import { MasBranch } from "./MasBranch";
import { MasTax } from "./MasTax";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JsalBillDet2 } from "./JsalBillDet2";
import { JsalDelivery } from "./JsalDelivery";
import { MbillDet } from "./MbillDet";

@Index("BILLBRANCH", ["branchfk"], {})
@Index("BILLDATE$SAL_BILLPK", ["salBillpk", "billDate"], {})
@Index(
  "BILLFIND",
  [
    "delflag",
    "branchfk",
    "tranyear",
    "taxType",
    "forBill",
    "billDate",
    "billNo",
  ],
  {}
)
@Index("BILLIND1", ["billDate", "branchfk", "delflag"], {})
@Index("BILLPROD", ["billType"], {})
@Index(
  "BILL_RETRIEVE",
  ["delflag", "branchfk", "tranyear", "forBill", "custfk"],
  {}
)
@Index("COUNTERBILL", ["counterfk"], {})
@Index("DATE$BILL", ["billDate"], {})
@Index("DAYEND3", ["billType", "forBill", "branchfk"], {})
@Index("DOCBILL", ["docfk"], {})
@Index("GSSTKFKBILL", ["gsstkfk"], {})
@Index("HOMEBILL", ["homeFlag"], {})
@Index("JSAL_BILLPK", ["salBillpk"], { unique: true })
@Index("SALIN1", ["taxType", "branchfk", "billDate", "delflag"], {})
@Index(
  "SALREP1",
  ["billNo", "billDate", "taxType", "billSt", "branchfk", "tranyear"],
  {}
)
@Index(
  "SAL_BILLPK$BILL_DATE",
  ["salBillpk", "billDate", "delflag", "branchfk"],
  {}
)
@Index(
  "THANGA6",
  ["salBillpk", "billDate", "delflag", "branchfk", "billSt"],
  {}
)
@Index("THANGAST3", ["salBillpk", "billDate", "delflag", "billSt"], {})
@Entity("JSAL_BILL")
export class JsalBill {
  @Column("number", {
    primary: true,
    name: "SAL_BILLPK",
    precision: 8,
    scale: 0,
  })
  salBillpk: number;

  @Column("number", { name: "BILL_NO", precision: 8, scale: 0 })
  billNo: number;

  @Column("date", { name: "BILL_DATE" })
  billDate: Date;

  @Column("char", { name: "FOR_BILL", nullable: true, length: 2 })
  forBill: string | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 6, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "PROD_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  prodValue: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  netAmt: number | null;

  @Column("varchar2", { name: "DISC_AUTHO", nullable: true, length: 25 })
  discAutho: string | null;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "CASH_RECD",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  cashRecd: number | null;

  @Column("number", {
    name: "OTH_MODE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othMode: number | null;

  @Column("char", { name: "BILL_ST", nullable: true, length: 1 })
  billSt: string | null;

  @Column("char", {
    name: "BILL_TYPE",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  billType: string | null;

  @Column("char", { name: "TAX_TYPE", nullable: true, length: 1 })
  taxType: string | null;

  @Column("number", {
    name: "CRN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crnAmt: number | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  advAmt: number | null;

  @Column("number", {
    name: "RECD_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  recdAmt: number | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("number", {
    name: "ROUND_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  roundAmt: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("char", {
    name: "OR_IND",
    nullable: true,
    length: 1,
    default: () => "NULL",
  })
  orInd: string | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", { name: "TO_PAY", nullable: true, precision: 8, scale: 2 })
  toPay: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("char", {
    name: "CASH_CREDIT",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  cashCredit: string | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("char", { name: "INV_FLAG", nullable: true, length: 1 })
  invFlag: string | null;

  @Column("char", {
    name: "JSAL_TYPE",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  jsalType: string | null;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 8, scale: 0 })
  schFk: number | null;

  @Column("number", {
    name: "DISC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discAmt: number | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  discPer: number | null;

  @Column("number", {
    name: "DISC_EMPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  discEmpfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "BILL_ADJTYPE", nullable: true, length: 1 })
  billAdjtype: string | null;

  @Column("number", {
    name: "ADJSALWT",
    nullable: true,
    precision: 9,
    scale: 3,
  })
  adjsalwt: number | null;

  @Column("number", {
    name: "SALMANFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  salmanfk: number | null;

  @Column("char", { name: "TRAN_TYPE", nullable: true, length: 5 })
  tranType: string | null;

  @Column("number", { name: "TEMP", nullable: true, precision: 12, scale: 2 })
  temp: number | null;

  @OneToMany(() => AccRecBill, (accRecBill) => accRecBill.billfk)
  accRecBills: AccRecBill[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jsalBills)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => MasTax, (masTax) => masTax.jsalBills)
  @JoinColumn([{ name: "STAXFK", referencedColumnName: "taxpk" }])
  staxfk: MasTax;

  @OneToMany(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.salBillfk2)
  jsalBillDets: JsalBillDet1[];

  @OneToMany(() => JsalBillDet2, (jsalBillDet2) => jsalBillDet2.salBillfk2)
  jsalBillDets2: JsalBillDet2[];

  @OneToMany(() => JsalDelivery, (jsalDelivery) => jsalDelivery.salBillfk)
  jsalDeliveries: JsalDelivery[];

  @OneToMany(() => MbillDet, (mbillDet) => mbillDet.salBillfk)
  mbillDets: MbillDet[];
}
