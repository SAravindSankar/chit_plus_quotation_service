import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { JsalQuo } from "./JsalQuo";

@Index("JQUO_DET2PK", ["quoDet2Pk"], { unique: true })
@Entity("JSAL_QUO_DET2")
export class JsalQuoDet2 {
  @Column("number", {
    primary: true,
    name: "QUO_DET2PK",
    precision: 8,
    scale: 0,
  })
  quoDet2Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 25 })
  typeDesc: string | null;

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
    name: "QUO_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jsalQuoDets2)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => JsalQuo, (jsalQuo) => jsalQuo.jsalQuoDets2)
  @JoinColumn([{ name: "SAL_QUOFK", referencedColumnName: "salQuopk" }])
  salQuofk: JsalQuo;
}
