import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { MasUom } from "./MasUom";
import { JmasOtherChrg } from "./JmasOtherChrg";
import { JmasProdChrg } from "./JmasProdChrg";
import { JmasRol } from "./JmasRol";
import { JsalOrdDet14 } from "./JsalOrdDet14";

@Index("JMAS_CHARGEPK", ["chrgpk"], { unique: true })
@Entity("JMAS_CHARGES")
export class JmasCharges {
  @Column("number", { primary: true, name: "CHRGPK", precision: 6, scale: 0 })
  chrgpk: number;

  @Column("varchar2", { name: "CHARGES", length: 30 })
  charges: string;

  @Column("number", { name: "UNIT", precision: 8, scale: 3 })
  unit: number;

  @Column("char", { name: "TYPE", length: 1 })
  type: string;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "ABYFK", precision: 4, scale: 0 })
  abyfk: number;

  @Column("date", { name: "ADATE" })
  adate: Date;

  @Column("number", { name: "PER", nullable: true, precision: 6, scale: 2 })
  per: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "PER_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  perRate: number | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  addRateAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.jmasCharges)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasUom, (masUom) => masUom.jmasCharges)
  @JoinColumn([{ name: "UOMFK", referencedColumnName: "uompk" }])
  uomfk: MasUom;

  @OneToMany(() => JmasOtherChrg, (jmasOtherChrg) => jmasOtherChrg.chrgfk)
  jmasOtherChrgs: JmasOtherChrg[];

  @OneToMany(() => JmasProdChrg, (jmasProdChrg) => jmasProdChrg.chrgfk)
  jmasProdChrgs: JmasProdChrg[];

  @OneToMany(() => JmasRol, (jmasRol) => jmasRol.chrgfk)
  jmasRols: JmasRol[];

  @OneToMany(() => JsalOrdDet14, (jsalOrdDet14) => jsalOrdDet14.chrgfk)
  jsalOrdDets: JsalOrdDet14[];
}
