import { Column, Entity } from "typeorm";

@Entity("TDAY_TRAN_STONE_STOCK")
export class TdayTranStoneStock {
  @Column("number", {
    name: "TRAN_STONEPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranStonepk: number | null;

  @Column("number", {
    name: "TRAN_STOCKFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranStockfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("char", { name: "REC_ISS", nullable: true, length: 1 })
  recIss: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "CARAT", nullable: true, precision: 8, scale: 3 })
  carat: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 12, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("char", { name: "TRAN_STONE_ST", nullable: true, length: 1 })
  tranStoneSt: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
