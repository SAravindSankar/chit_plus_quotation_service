import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasProduct } from "./JmasProduct";

@Index("GUARANTEEPK", ["guaranteepk"], { unique: true })
@Entity("JMAS_GUARANTEE")
export class JmasGuarantee {
  @Column("number", {
    primary: true,
    name: "GUARANTEEPK",
    precision: 8,
    scale: 0,
  })
  guaranteepk: number;

  @Column("varchar2", { name: "DISCRIPTION", nullable: true, length: 100 })
  discription: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 50 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasGuarantees)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
