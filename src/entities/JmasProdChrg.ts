import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";
import { JmasCharges } from "./JmasCharges";
import { JmasProduct } from "./JmasProduct";
import { MasUom } from "./MasUom";

@Index("CHRG_RANGEPK", ["chrgRangepk"], { unique: true })
@Entity("JMAS_PROD_CHRG")
export class JmasProdChrg {
  @Column("number", {
    primary: true,
    name: "CHRG_RANGEPK",
    precision: 8,
    scale: 0,
  })
  chrgRangepk: number;

  @Column("number", { name: "UNIT", nullable: true, precision: 8, scale: 3 })
  unit: number | null;

  @Column("char", { name: "CHRG_TYPE", nullable: true, length: 1 })
  chrgType: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "RANGE_LABLE", nullable: true, length: 4 })
  rangeLable: string | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasProdChrgs)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.jmasProdChrgs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => JmasCharges, (jmasCharges) => jmasCharges.jmasProdChrgs)
  @JoinColumn([{ name: "CHRGFK", referencedColumnName: "chrgpk" }])
  chrgfk: JmasCharges;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasProdChrgs)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => MasUom, (masUom) => masUom.jmasProdChrgs)
  @JoinColumn([{ name: "UOMFK", referencedColumnName: "uompk" }])
  uomfk: MasUom;
}
