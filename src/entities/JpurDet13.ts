import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JpurDet1 } from "./JpurDet1";
import { JmasProduct } from "./JmasProduct";

@Index("PUR_DET13PK", ["purDet13Pk"], { unique: true })
@Entity("JPUR_DET13")
export class JpurDet13 {
  @Column("number", {
    primary: true,
    name: "PUR_DET13PK",
    precision: 8,
    scale: 0,
  })
  purDet13Pk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JpurDet1, (jpurDet1) => jpurDet1.jpurDets3)
  @JoinColumn([{ name: "PUR_DET1FK", referencedColumnName: "purDet1Pk" }])
  purDet1Fk: JpurDet1;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jpurDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
