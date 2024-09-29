import { Column, Entity } from "typeorm";

@Entity("TDAY_ORD_DET2")
export class TdayOrdDet2 {
  @Column("number", { name: "ORDER_DET2PK", precision: 8, scale: 0 })
  orderDet2Pk: number;

  @Column("number", {
    name: "SAL_ORDERFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salOrderfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "DISCOUNT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  discount: number | null;

  @Column("number", { name: "PLUS", nullable: true, precision: 8, scale: 3 })
  plus: number | null;

  @Column("number", { name: "ALLOY", nullable: true, precision: 8, scale: 3 })
  alloy: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("date", { name: "RECDATE", nullable: true })
  recdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
