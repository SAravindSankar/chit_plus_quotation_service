import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasProduct } from "./JmasProduct";

@Index("SYS_C007628", ["lotDet3Pk"], { unique: true })
@Entity("JLOT_DET3")
export class JlotDet3 {
  @Column("number", {
    primary: true,
    name: "LOT_DET3PK",
    precision: 8,
    scale: 0,
  })
  lotDet3Pk: number;

  @Column("number", {
    name: "SET_TAGFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  setTagfk: number | null;

  @Column("number", { name: "SET_NO", nullable: true, precision: 6, scale: 0 })
  setNo: number | null;

  @Column("date", { name: "SET_DATE", nullable: true })
  setDate: Date | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jlotDets)
  @JoinColumn([{ name: "SET_PRODFK", referencedColumnName: "prodclasspk" }])
  setProdfk: JmasProduct;
}
