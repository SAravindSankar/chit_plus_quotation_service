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
import { MasTax } from "./MasTax";
import { JsalQuoDet1 } from "./JsalQuoDet1";
import { JsalQuoDet2 } from "./JsalQuoDet2";

@Index("JSAL_QUOPK", ["salQuopk"], { unique: true })
@Index("QUOIND1", ["quoNo", "delflag", "branchfk"], {})
@Entity("JSAL_QUO")
export class JsalQuo {
  @Column("number", {
    primary: true,
    name: "SAL_QUOPK",
    precision: 8,
    scale: 0,
  })
  salQuopk: number;

  @Column("number", { name: "QUO_NO", nullable: true, precision: 8, scale: 0 })
  quoNo: number | null;

  @Column("date", { name: "QUO_DATE", nullable: true })
  quoDate: Date | null;

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

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 5, scale: 0 })
  docNo: number | null;

  @Column("date", { name: "DOC_DATE", nullable: true })
  docDate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "QUO_IND", nullable: true, length: 1 })
  quoInd: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("char", {
    name: "QUO_TYPE",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  quoType: string | null;

  @Column("number", {
    name: "PUR_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purTranDocfk: number | null;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 8, scale: 0 })
  schFk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 8, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "QUO_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDocfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "CHITGRPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  chitgrpfk: number | null;

  @Column("number", {
    name: "CHITMEMBERFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  chitmemberfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jsalQuos)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jsalQuos)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @ManyToOne(() => MasTax, (masTax) => masTax.jsalQuos)
  @JoinColumn([{ name: "STAXFK", referencedColumnName: "taxpk" }])
  staxfk: MasTax;

  @OneToMany(() => JsalQuoDet1, (jsalQuoDet1) => jsalQuoDet1.salQuofk)
  jsalQuoDets: JsalQuoDet1[];

  @OneToMany(() => JsalQuoDet2, (jsalQuoDet2) => jsalQuoDet2.salQuofk)
  jsalQuoDets2: JsalQuoDet2[];
}
