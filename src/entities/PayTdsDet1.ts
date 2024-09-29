import { Column, Entity, Index } from "typeorm";

@Index("PAY_TDS_DET1PK", ["payTdsDet1Pk"], { unique: true })
@Entity("PAY_TDS_DET1")
export class PayTdsDet1 {
  @Column("number", {
    primary: true,
    name: "PAY_TDS_DET1PK",
    precision: 8,
    scale: 0,
  })
  payTdsDet1Pk: number;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("number", {
    name: "TDS_GRPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tdsGrpfk: number | null;

  @Column("number", { name: "PAYFK", nullable: true, precision: 8, scale: 0 })
  payfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("date", { name: "MONTH_YEAR", nullable: true })
  monthYear: Date | null;

  @Column("char", { name: "PARTY_TYPE", nullable: true, length: 1 })
  partyType: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "TDS_AMOUNT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  tdsAmount: number | null;
}
