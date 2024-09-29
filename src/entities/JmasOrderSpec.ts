import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { JmasProduct } from "./JmasProduct";

@Index("ORDER_SPECPK", ["orderSpecpk"], { unique: true })
@Entity("JMAS_ORDER_SPEC")
export class JmasOrderSpec {
  @Column("number", {
    primary: true,
    name: "ORDER_SPECPK",
    precision: 8,
    scale: 0,
  })
  orderSpecpk: number;

  @Column("varchar2", { name: "SPEC", nullable: true, length: 50 })
  spec: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

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

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.jmasOrderSpecs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasOrderSpecs)
  @JoinColumn([{ name: "PRODCLASSFK", referencedColumnName: "prodclasspk" }])
  prodclassfk: JmasProduct;
}
