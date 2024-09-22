import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasProduct } from "./JmasProduct";

@Index("DEALER_CHRGPK", ["dealerChrgpk"], { unique: true })
@Entity("JMAS_DEALER_CHRG")
export class JmasDealerChrg {
  @Column("number", {
    primary: true,
    name: "DEALER_CHRGPK",
    precision: 8,
    scale: 0,
  })
  dealerChrgpk: number;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 6, scale: 0 })
  partyfk: number | null;

  @Column("char", { name: "PCS_WT_CT", nullable: true, length: 1 })
  pcsWtCt: string | null;

  @Column("number", {
    name: "RANGE_FROM",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeFrom: number | null;

  @Column("number", {
    name: "RANGE_TO",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeTo: number | null;

  @Column("number", { name: "MC_PER", nullable: true, precision: 5, scale: 2 })
  mcPer: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("number", { name: "WC_PER", nullable: true, precision: 5, scale: 2 })
  wcPer: number | null;

  @Column("number", { name: "WC_WT", nullable: true, precision: 8, scale: 3 })
  wcWt: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

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

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasDealerChrgs)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
