import { Column, Entity, Index, OneToMany } from "typeorm";
import { JhisRate } from "./JhisRate";
import { JmasCharges } from "./JmasCharges";
import { JmasProdChrg } from "./JmasProdChrg";
import { MasEventschDet11 } from "./MasEventschDet11";
import { TinvAdjDet } from "./TinvAdjDet";
import { TpurPoDet } from "./TpurPoDet";

@Index("UOMPK", ["uompk"], { unique: true })
@Entity("MAS_UOM")
export class MasUom {
  @Column("number", { primary: true, name: "UOMPK", precision: 4, scale: 0 })
  uompk: number;

  @Column("varchar2", { name: "SHORT_DESC", nullable: true, length: 5 })
  shortDesc: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

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

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "REFUOMPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  refuompk: number | null;

  @OneToMany(() => JhisRate, (jhisRate) => jhisRate.indUomfk)
  jhisRates: JhisRate[];

  @OneToMany(() => JhisRate, (jhisRate) => jhisRate.intlUomfk)
  jhisRates2: JhisRate[];

  @OneToMany(() => JmasCharges, (jmasCharges) => jmasCharges.uomfk)
  jmasCharges: JmasCharges[];

  @OneToMany(() => JmasProdChrg, (jmasProdChrg) => jmasProdChrg.uomfk)
  jmasProdChrgs: JmasProdChrg[];

  @OneToMany(
    () => MasEventschDet11,
    (masEventschDet11) => masEventschDet11.uomfk
  )
  masEventschDets: MasEventschDet11[];

  @OneToMany(() => TinvAdjDet, (tinvAdjDet) => tinvAdjDet.uomfk)
  tinvAdjDets: TinvAdjDet[];

  @OneToMany(() => TpurPoDet, (tpurPoDet) => tpurPoDet.uomfk)
  tpurPoDets: TpurPoDet[];
}
