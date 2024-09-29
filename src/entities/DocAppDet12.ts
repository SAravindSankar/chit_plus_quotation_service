import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { DocAppDet1 } from "./DocAppDet1";

@Index("APP_DET12PK", ["appDet12Pk"], { unique: true })
@Entity("DOC_APP_DET12")
export class DocAppDet12 {
  @Column("number", {
    primary: true,
    name: "APP_DET12PK",
    precision: 8,
    scale: 0,
  })
  appDet12Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", {
    name: "DET12_APP_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  det12AppAmt: number | null;

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

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.docAppDets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => DocAppDet1, (docAppDet1) => docAppDet1.docAppDets2)
  @JoinColumn([{ name: "APP_DET1FK", referencedColumnName: "appDet1Pk" }])
  appDet1Fk: DocAppDet1;
}
