import { Column, Entity, Index } from "typeorm";

@Index("HIS_CITY_RATEPK", ["hisCityRatepk"], { unique: true })
@Entity("JHIS_CITY_RATE")
export class JhisCityRate {
  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("number", {
    name: "PROD_RATEFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  prodRatefk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 6, scale: 2 })
  rate: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    primary: true,
    name: "HIS_CITY_RATEPK",
    precision: 8,
    scale: 0,
  })
  hisCityRatepk: number;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
