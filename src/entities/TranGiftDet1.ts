import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008552", ["giftDet1Pk"], { unique: true })
@Entity("TRAN_GIFT_DET1")
export class TranGiftDet1 {
  @Column("number", {
    primary: true,
    name: "GIFT_DET1PK",
    precision: 8,
    scale: 0,
  })
  giftDet1Pk: number;

  @Column("number", { name: "GIFTFK", nullable: true, precision: 8, scale: 0 })
  giftfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 6, scale: 0 })
  tagfk: number | null;

  @Column("number", {
    name: "PCS",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  pcs: number | null;

  @Column("number", {
    name: "GWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  gwt: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", {
    name: "AMT",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  amt: number | null;

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
}
