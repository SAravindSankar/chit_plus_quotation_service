import { Column, Entity, Index } from "typeorm";

@Index("TRAN_STOCKPK", ["tranStockpk"], { unique: true })
@Entity("NONTAG130")
export class Nontag130 {
  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "RQTY", nullable: true, precision: 8, scale: 3 })
  rqty: number | null;

  @Column("number", { name: "SQTY", nullable: true, precision: 8, scale: 3 })
  sqty: number | null;

  @Column("number", { name: "PQTY", nullable: true, precision: 8, scale: 3 })
  pqty: number | null;

  @Column("number", { name: "RPCS", nullable: true, precision: 8, scale: 3 })
  rpcs: number | null;

  @Column("number", { name: "SPCS", nullable: true, precision: 8, scale: 3 })
  spcs: number | null;

  @Column("number", { name: "PPCS", nullable: true, precision: 8, scale: 3 })
  ppcs: number | null;

  @Column("char", { name: "UPD", nullable: true, length: 1 })
  upd: string | null;

  @Column("number", {
    primary: true,
    name: "TRAN_STOCKPK",
    precision: 8,
    scale: 0,
  })
  tranStockpk: number;
}
