import { Column, Entity } from "typeorm";

@Entity("TDAY_ORD_DET12")
export class TdayOrdDet12 {
  @Column("number", { name: "ORDER_DET12PK", precision: 8, scale: 0 })
  orderDet12Pk: number;

  @Column("number", {
    name: "ORDER_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet1Fk: number | null;

  @Column("varchar2", { name: "PROD_SPEC", nullable: true, length: 100 })
  prodSpec: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "MSIZE", nullable: true, length: 20 })
  msize: string | null;

  @Column("number", {
    name: "PRODSPECFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  prodspecfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
