import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JhisProdRate } from "./JhisProdRate";
import { MasUom } from "./MasUom";

@Index("HIS_RATEPK", ["hisRatepk"], { unique: true })
@Entity("JHIS_RATE")
export class JhisRate {
  @Column("number", {
    primary: true,
    name: "HIS_RATEPK",
    precision: 6,
    scale: 0,
  })
  hisRatepk: number;

  @Column("varchar2", { name: "DATE_TIME", nullable: true, length: 20 })
  dateTime: string | null;

  @Column("number", {
    name: "DOLLAR_RUPEES",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  dollarRupees: number | null;

  @Column("number", {
    name: "STD_DUTY_GMS",
    nullable: true,
    precision: 6,
    scale: 3,
  })
  stdDutyGms: number | null;

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

  @OneToMany(() => JhisProdRate, (jhisProdRate) => jhisProdRate.hisRatefk)
  jhisProdRates: JhisProdRate[];

  @ManyToOne(() => MasUom, (masUom) => masUom.jhisRates)
  @JoinColumn([{ name: "IND_UOMFK", referencedColumnName: "uompk" }])
  indUomfk: MasUom;

  @ManyToOne(() => MasUom, (masUom) => masUom.jhisRates2)
  @JoinColumn([{ name: "INTL_UOMFK", referencedColumnName: "uompk" }])
  intlUomfk: MasUom;
}
