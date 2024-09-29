import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TodEventsch } from "./TodEventsch";

@Entity("TOD_EVENTSCH_PROD")
export class TodEventschProd {
  //DB_ERROR -> PK
  @Column("number", {
    name: "EVENTSCH_PRODPK",
    nullable: true,
    precision: 8,
    scale: 0,
    primary: true,
  })
  eventschProdpk: number | null;

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

  @ManyToOne(() => TodEventsch, (todEventsch) => todEventsch.todEventschProds)
  @JoinColumn([{ name: "EVENTSCHFK", referencedColumnName: "eventschpk" }])
  eventschfk: TodEventsch;
}
