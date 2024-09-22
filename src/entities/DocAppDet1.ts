import { Column, Entity, Index, OneToMany } from "typeorm";
import { DocAppDet11 } from "./DocAppDet11";
import { DocAppDet12 } from "./DocAppDet12";

@Index("APP_DET1PK", ["appDet1Pk"], { unique: true })
@Entity("DOC_APP_DET1")
export class DocAppDet1 {
  @Column("number", {
    primary: true,
    name: "APP_DET1PK",
    precision: 8,
    scale: 0,
  })
  appDet1Pk: number;

  @Column("number", { name: "APPFK", nullable: true, precision: 8, scale: 0 })
  appfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "DET1_APP_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  det1AppAmt: number | null;

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

  @OneToMany(() => DocAppDet11, (docAppDet11) => docAppDet11.appDet1Fk)
  docAppDets: DocAppDet11[];

  @OneToMany(() => DocAppDet12, (docAppDet12) => docAppDet12.appDet1Fk)
  docAppDets2: DocAppDet12[];
}
