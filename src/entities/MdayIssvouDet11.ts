import { Column, Entity } from "typeorm";

@Entity("MDAY_ISSVOU_DET11")
export class MdayIssvouDet11 {
  @Column("number", {
    name: "ISS_VOU_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVouDet11Pk: number | null;

  @Column("number", {
    name: "ISS_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVouDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("char", { name: "CARAT", nullable: true, length: 5 })
  carat: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMT", nullable: true, precision: 8, scale: 2 })
  amt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;
}
