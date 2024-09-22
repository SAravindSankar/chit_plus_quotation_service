import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL_JACC")
export class TdayBillJacc {
  @Column("number", {
    name: "BILL_JACCPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billJaccpk: number | null;

  @Column("number", {
    name: "ACC_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  accVoufk: number | null;

  @Column("number", { name: "BILLFK", nullable: true, precision: 8, scale: 0 })
  billfk: number | null;

  @Column("number", {
    name: "JACC_BILL_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  jaccBillAmt: number | null;

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
