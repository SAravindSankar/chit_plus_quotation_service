import { Column, Entity, Index } from "typeorm";

@Index("PROD_DET1PK", ["prodDet1Pk"], { unique: true })
@Entity("TMAS_PRODUCT_DET1")
export class TmasProductDet1 {
  @Column("number", {
    primary: true,
    name: "PROD_DET1PK",
    precision: 10,
    scale: 0,
  })
  prodDet1Pk: number;

  @Column("number", {
    name: "PRODCLASSFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  prodclassfk: number | null;

  @Column("number", { name: "ATTRFK", nullable: true, precision: 10, scale: 0 })
  attrfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  levelNo: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
