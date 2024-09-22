import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalBrMode } from "./JsalBrMode";

@Index("BR_DETPK", ["brDetpk"], { unique: true })
@Entity("JSAL_BR_DET")
export class JsalBrDet {
  @Column("number", { primary: true, name: "BR_DETPK", precision: 8, scale: 0 })
  brDetpk: number;

  @Column("number", {
    name: "PO_CHQ_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  poChqAmt: number | null;

  @Column("number", {
    name: "OTH_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othAmt: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  branchfk: number | null;

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

  @ManyToOne(() => JsalBrMode, (jsalBrMode) => jsalBrMode.jsalBrDets)
  @JoinColumn([{ name: "BR_MODEFK", referencedColumnName: "brModepk" }])
  brModefk: JsalBrMode;
}
