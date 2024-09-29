import { Column, Entity, Index } from "typeorm";

@Index("CITY_RATEPK", ["cityRatepk"], { unique: true })
@Entity("JMAS_CITY_RATE")
export class JmasCityRate {
  @Column("number", {
    primary: true,
    name: "CITY_RATEPK",
    precision: 4,
    scale: 0,
  })
  cityRatepk: number;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("number", {
    name: "PROD_RATEFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  prodRatefk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 6, scale: 2 })
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
