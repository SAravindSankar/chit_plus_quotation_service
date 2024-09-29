import { Column, Entity } from "typeorm";

@Entity("TRAN_PRICE")
export class TranPrice {
  @Column("number", {
    name: "TRAN_PRICEPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPricepk: number | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 20 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("date", { name: "EFF_DATE", nullable: true })
  effDate: Date | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "VENDOR_REF", nullable: true, length: 20 })
  vendorRef: string | null;

  @Column("char", {
    name: "STATUS",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  status: string | null;

  @Column("char", {
    name: "UPDATED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  updated: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
