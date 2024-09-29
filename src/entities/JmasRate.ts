import { Column, Entity, Index, OneToMany } from "typeorm";
import { JmasProdRate } from "./JmasProdRate";

@Index("MAS_RATEPK", ["masRatepk"], { unique: true })
@Entity("JMAS_RATE")
export class JmasRate {
  @Column("varchar2", { name: "DATE_TIME", nullable: true, length: 20 })
  dateTime: string | null;

  @Column("number", {
    name: "INTL_UOMFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  intlUomfk: number | null;

  @Column("number", {
    name: "IND_UOMFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  indUomfk: number | null;

  @Column("number", {
    name: "DOLLAR_RUPEE",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  dollarRupee: number | null;

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

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    primary: true,
    name: "MAS_RATEPK",
    precision: 4,
    scale: 0,
  })
  masRatepk: number;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => JmasProdRate, (jmasProdRate) => jmasProdRate.masRatefk)
  jmasProdRates: JmasProdRate[];
}
