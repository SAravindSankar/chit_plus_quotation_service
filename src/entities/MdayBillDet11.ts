import { Column, Entity } from "typeorm";

@Entity("MDAY_BILL_DET11")
export class MdayBillDet11 {
  @Column("number", {
    name: "BILL_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDet11Pk: number | null;

  @Column("number", {
    name: "BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 8, scale: 3 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;
}
