import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007803", ["orderPurpk"], { unique: true })
@Entity("JSAL_ORDER_PUR")
export class JsalOrderPur {
  @Column("number", {
    primary: true,
    name: "ORDER_PURPK",
    precision: 8,
    scale: 0,
  })
  orderPurpk: number;

  @Column("char", { name: "PUR_TYPE", nullable: true, length: 1 })
  purType: string | null;

  @Column("number", { name: "ORDERFK", nullable: true, precision: 8, scale: 0 })
  orderfk: number | null;

  @Column("number", {
    name: "ORD_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  ordDetfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "RECWT", nullable: true, precision: 12, scale: 3 })
  recwt: number | null;

  @Column("date", { name: "RECDATE", nullable: true })
  recdate: Date | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "ISS_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVoufk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "OR_IND", nullable: true, length: 1 })
  orInd: string | null;
}
