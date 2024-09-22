import { Column, Entity } from "typeorm";

@Entity("TGR_GRN_DET13")
export class TgrGrnDet13 {
  @Column("number", {
    name: "TGR_GRN_DET13PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrGrnDet13Pk: number | null;

  @Column("varchar2", { name: "TGR_GRN_DET1FK", nullable: true, length: 20 })
  tgrGrnDet1Fk: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "ROWNUMBER",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  rownumber: number | null;

  @Column("number", {
    name: "TYPE_DOCGENPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  typeDocgenpk: number | null;
}
