import { Column, Entity, Index } from "typeorm";

@Index("PAY_PURPK", ["payPurpk"], { unique: true })
@Entity("ACC_PAY_PUR")
export class AccPayPur {
  @Column("number", {
    primary: true,
    name: "PAY_PURPK",
    precision: 8,
    scale: 0,
  })
  payPurpk: number;

  @Column("number", { name: "PAYFK", nullable: true, precision: 8, scale: 0 })
  payfk: number | null;

  @Column("char", { name: "GRN_INDENT", nullable: true, length: 1 })
  grnIndent: string | null;

  @Column("number", {
    name: "GRN_INDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  grnIndfk: number | null;

  @Column("number", {
    name: "PAY_GRNIND_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  payGrnindAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
