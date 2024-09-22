import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { JmasPurWt } from "./JmasPurWt";
import { JmasCharges } from "./JmasCharges";
import { JmasProdSpec } from "./JmasProdSpec";
import { JmasProduct } from "./JmasProduct";

@Index("SYS_C007711", ["rolpk"], { unique: true })
@Entity("JMAS_ROL")
export class JmasRol {
  @Column("number", { primary: true, name: "ROLPK", precision: 6, scale: 0 })
  rolpk: number;

  @Column("number", {
    name: "REG_ROL",
    nullable: true,
    precision: 5,
    scale: 0,
    default: () => "0",
  })
  regRol: number | null;

  @Column("number", {
    name: "SEA_ROL",
    nullable: true,
    precision: 5,
    scale: 0,
    default: () => "0",
  })
  seaRol: number | null;

  @Column("number", {
    name: "ROQ_UNITS",
    nullable: true,
    precision: 5,
    scale: 0,
    default: () => "0",
  })
  roqUnits: number | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jmasRols)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => JmasPurWt, (jmasPurWt) => jmasPurWt.jmasRols)
  @JoinColumn([{ name: "PUR_WTFK", referencedColumnName: "purWtpk" }])
  purWtfk: JmasPurWt;

  @ManyToOne(() => JmasCharges, (jmasCharges) => jmasCharges.jmasRols)
  @JoinColumn([{ name: "CHRGFK", referencedColumnName: "chrgpk" }])
  chrgfk: JmasCharges;

  @ManyToOne(() => JmasProdSpec, (jmasProdSpec) => jmasProdSpec.jmasRols)
  @JoinColumn([{ name: "PROD_SPECFK", referencedColumnName: "prodSpecpk" }])
  prodSpecfk: JmasProdSpec;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasRols)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
