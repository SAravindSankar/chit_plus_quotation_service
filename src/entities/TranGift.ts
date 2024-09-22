import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008551", ["giftpk"], { unique: true })
@Entity("TRAN_GIFT")
export class TranGift {
  @Column("number", { primary: true, name: "GIFTPK", precision: 8, scale: 0 })
  giftpk: number;

  @Column("number", { name: "GIFT_NO", nullable: true, precision: 6, scale: 0 })
  giftNo: number | null;

  @Column("date", { name: "GIFT_DATE", nullable: true })
  giftDate: Date | null;

  @Column("char", { name: "FOR_GIFT", nullable: true, length: 2 })
  forGift: string | null;

  @Column("char", { name: "GIFT_TYPE", nullable: true, length: 1 })
  giftType: string | null;

  @Column("char", { name: "CASH_GIFT", nullable: true, length: 1 })
  cashGift: string | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "GIFT_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  giftDocfk: number | null;

  @Column("char", { name: "GIFT_ST", nullable: true, length: 1 })
  giftSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

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

  @Column("number", {
    name: "CHIT_MEMBERFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  chitMemberfk: number | null;

  @Column("number", {
    name: "GIFT_ISSAMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  giftIssamt: number | null;
}
