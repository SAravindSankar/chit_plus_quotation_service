import { Column, Entity } from "typeorm";

@Entity("TRAN_PRICE_DET11")
export class TranPriceDet11 {
  @Column("number", {
    name: "TRAN_PRICE_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPriceDet11Pk: number | null;

  @Column("number", {
    name: "TRAN_PRICE_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPriceDetfk: number | null;

  @Column("number", {
    name: "MAS_GENERALFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  masGeneralfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 12, scale: 2 })
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
