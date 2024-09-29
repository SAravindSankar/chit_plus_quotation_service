import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasDoc } from "./MasDoc";
import { DocAppDet1 } from "./DocAppDet1";

@Index("APP_DET11PK", ["appDet11Pk"], { unique: true })
@Entity("DOC_APP_DET11")
export class DocAppDet11 {
  @Column("number", {
    primary: true,
    name: "APP_DET11PK",
    precision: 8,
    scale: 0,
  })
  appDet11Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", {
    name: "DET11_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  det11TranDocfk: number | null;

  @Column("number", {
    name: "DET11_APP_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  det11AppAmt: number | null;

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

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.docAppDets)
  @JoinColumn([{ name: "DET11_DOCFK", referencedColumnName: "docpk" }])
  det11Docfk: MasDoc;

  @ManyToOne(() => DocAppDet1, (docAppDet1) => docAppDet1.docAppDets)
  @JoinColumn([{ name: "APP_DET1FK", referencedColumnName: "appDet1Pk" }])
  appDet1Fk: DocAppDet1;
}
