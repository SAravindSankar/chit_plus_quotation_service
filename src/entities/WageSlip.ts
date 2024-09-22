import { Column, Entity } from "typeorm";

@Entity("WAGE_SLIP")
export class WageSlip {
  @Column("number", { name: "PAY_SLIPPK", precision: 8, scale: 0 })
  paySlippk: number;

  @Column("number", { name: "EMPFK", precision: 8, scale: 0 })
  empfk: number;

  @Column("char", { name: "MONTHYEAR", length: 8 })
  monthyear: string;

  @Column("number", { name: "DAYS_WKG", precision: 4, scale: 1 })
  daysWkg: number;

  @Column("number", { name: "DAYS_WKD", precision: 4, scale: 1 })
  daysWkd: number;

  @Column("number", {
    name: "DAYS_LEAVE",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysLeave: number | null;

  @Column("number", {
    name: "DAYS_LOP",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysLop: number | null;

  @Column("number", {
    name: "TOT_EARN",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totEarn: number | null;

  @Column("number", {
    name: "TOT_DED",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totDed: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  netAmt: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BASIC", nullable: true, precision: 10, scale: 2 })
  basic: number | null;

  @Column("char", { name: "SALTRAN_ST", nullable: true, length: 1 })
  saltranSt: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
