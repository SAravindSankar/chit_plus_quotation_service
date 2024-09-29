import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JrecVouDet1 } from "./JrecVouDet1";
import { JmasProduct } from "./JmasProduct";

@Index("REC_VOU_DET11PK", ["recVouDet11Pk"], { unique: true })
@Entity("JREC_VOU_DET11")
export class JrecVouDet11 {
  @Column("number", {
    primary: true,
    name: "REC_VOU_DET11PK",
    precision: 8,
    scale: 0,
  })
  recVouDet11Pk: number;

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

  @Column("number", {
    name: "CARAT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  carat: number | null;

  @Column("number", {
    name: "WEIGHT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  weight: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JrecVouDet1, (jrecVouDet1) => jrecVouDet1.jrecVouDets)
  @JoinColumn([
    { name: "REC_VOU_DET1FK", referencedColumnName: "recVouDet1Pk" },
  ])
  recVouDet1Fk: JrecVouDet1;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jrecVouDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
