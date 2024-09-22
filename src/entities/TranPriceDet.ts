import { Column, Entity } from "typeorm";

@Entity("TRAN_PRICE_DET")
export class TranPriceDet {
  @Column("number", {
    name: "TRAN_PRICE_DETPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPriceDetpk: number | null;

  @Column("number", {
    name: "TRAN_PRICEFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPricefk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
