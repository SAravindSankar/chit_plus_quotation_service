import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL_PUR")
export class TdayBillPur {
  @Column("number", {
    name: "BILL_PURPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billPurpk: number | null;

  @Column("number", { name: "BILLFK", nullable: true, precision: 8, scale: 0 })
  billfk: number | null;

  @Column("number", { name: "PURFK", nullable: true, precision: 8, scale: 0 })
  purfk: number | null;

  @Column("number", {
    name: "BILL_PUR_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  billPurAmt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
