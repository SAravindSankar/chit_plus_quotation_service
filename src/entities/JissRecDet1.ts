import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasProduct } from "./JmasProduct";
import { JissRecDet } from "./JissRecDet";

@Index("ISS_REC_DET1PK", ["issRecDet1Pk"], { unique: true })
@Entity("JISS_REC_DET1")
export class JissRecDet1 {
  @Column("number", {
    primary: true,
    name: "ISS_REC_DET1PK",
    precision: 8,
    scale: 0,
  })
  issRecDet1Pk: number;

  @Column("char", { name: "CARAT", nullable: true, length: 5 })
  carat: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMT", nullable: true, precision: 8, scale: 2 })
  amt: number | null;

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

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jissRecDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => JissRecDet, (jissRecDet) => jissRecDet.jissRecDets)
  @JoinColumn([{ name: "ISS_REC_DETFK", referencedColumnName: "issRecDetpk" }])
  issRecDetfk: JissRecDet;
}
