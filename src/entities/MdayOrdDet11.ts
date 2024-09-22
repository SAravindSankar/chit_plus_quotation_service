import { Column, Entity } from "typeorm";

@Entity("MDAY_ORD_DET11")
export class MdayOrdDet11 {
  @Column("number", {
    name: "ORDER_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet11Pk: number | null;

  @Column("number", {
    name: "ORDER_DET1FKK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet1Fkk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;
}
