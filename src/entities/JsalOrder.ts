import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasBranch } from "./MasBranch";
import { MasEmp } from "./MasEmp";
import { JsalOrdDet1 } from "./JsalOrdDet1";
import { JsalOrdDet3 } from "./JsalOrdDet3";

@Index("JORDERPK", ["salOrderpk"], { unique: true })
@Entity("JSAL_ORDER")
export class JsalOrder {
  @Column("number", {
    primary: true,
    name: "SAL_ORDERPK",
    precision: 8,
    scale: 0,
  })
  salOrderpk: number;

  @Column("varchar2", { name: "TYPE", nullable: true, length: 20 })
  type: string | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 6, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("date", { name: "REM_DATE", nullable: true })
  remDate: Date | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("date", { name: "VALID_DATE", nullable: true })
  validDate: Date | null;

  @Column("char", { name: "ORDER_ST", nullable: true, length: 1 })
  orderSt: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("date", { name: "ORDER_DATE", nullable: true })
  orderDate: Date | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", {
    name: "ORDER_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderNo: number | null;

  @Column("char", { name: "OPEN", nullable: true, length: 1 })
  open: string | null;

  @Column("char", { name: "FOR_ORDER", nullable: true, length: 1 })
  forOrder: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 8, scale: 0 })
  taxfk: number | null;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 8, scale: 0 })
  schFk: number | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", {
    name: "ADJSALWT",
    nullable: true,
    precision: 9,
    scale: 3,
  })
  adjsalwt: number | null;

  @Column("char", { name: "ORD_TYPE", nullable: true, length: 1 })
  ordType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jsalOrders)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jsalOrders)
  @JoinColumn([{ name: "SALES_MAN", referencedColumnName: "emppk" }])
  salesMan: MasEmp;

  @OneToMany(() => JsalOrdDet1, (jsalOrdDet1) => jsalOrdDet1.salOrderfk)
  jsalOrdDets: JsalOrdDet1[];

  @OneToMany(() => JsalOrdDet3, (jsalOrdDet3) => jsalOrdDet3.salOrderfk)
  jsalOrdDets2: JsalOrdDet3[];
}
