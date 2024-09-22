import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { JmasProduct } from "./JmasProduct";

@Index("SPARESSPARESPK", ["sparesparepk"], { unique: true })
@Entity("MAS_BOM")
export class MasBom {
  @Column("number", {
    primary: true,
    name: "SPARESPAREPK",
    precision: 6,
    scale: 0,
  })
  sparesparepk: number;

  @Column("number", { name: "SPARESFK", precision: 6, scale: 0 })
  sparesfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 6, scale: 3 })
  qty: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masBoms)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.masBoms)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
