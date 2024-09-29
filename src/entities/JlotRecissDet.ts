import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JlotReciss } from "./JlotReciss";
import { JmasProduct } from "./JmasProduct";

@Index("SYS_C007637", ["lotRecissDetpk"], { unique: true })
@Entity("JLOT_RECISS_DET")
export class JlotRecissDet {
  @Column("number", {
    primary: true,
    name: "LOT_RECISS_DETPK",
    precision: 8,
    scale: 0,
  })
  lotRecissDetpk: number;

  @Column("number", { name: "CARROT", nullable: true, precision: 8, scale: 3 })
  carrot: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 10, scale: 3 })
  qty: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JlotReciss, (jlotReciss) => jlotReciss.jlotRecissDets)
  @JoinColumn([{ name: "LOT_RECISSFK", referencedColumnName: "lotRecisspk" }])
  lotRecissfk: JlotReciss;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jlotRecissDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
