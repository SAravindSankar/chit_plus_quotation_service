import { Column, Entity, Index } from "typeorm";

@Index("EVENTSCH_PRODPK", ["eventschProdpk"], { unique: true })
@Entity("EVENTSCH_PROD")
export class EventschProd {
  @Column("number", {
    primary: true,
    name: "EVENTSCH_PRODPK",
    precision: 8,
    scale: 0,
  })
  eventschProdpk: number;

  @Column("number", {
    name: "EVENTSCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  eventschfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 7, scale: 3 })
  qty: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

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
