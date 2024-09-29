import { Column, Entity } from "typeorm";

@Entity("TOD_EVENTSCH_BENEFITS")
export class TodEventschBenefits {
  @Column("number", {
    name: "EVENTSCH_BENEFITSPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  eventschBenefitspk: number | null;

  @Column("number", {
    name: "EVENTSCH_PRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  eventschProdfk: number | null;

  @Column("number", {
    name: "EVENTSCH_AMTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  eventschAmtfk: number | null;

  @Column("char", { name: "LOT", nullable: true, length: 1 })
  lot: string | null;

  @Column("char", { name: "SCHEME_TYPE", nullable: true, length: 1 })
  schemeType: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 7, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 7, scale: 2 })
  rate: number | null;

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
}
