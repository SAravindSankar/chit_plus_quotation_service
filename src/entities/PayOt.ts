import { Column, Entity } from "typeorm";

@Entity("PAY_OT")
export class PayOt {
  @Column("number", {
    name: "PAY_OTPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  payOtpk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("number", { name: "AEMPFK", nullable: true, precision: 8, scale: 0 })
  aempfk: number | null;

  @Column("date", { name: "FROM_DT", nullable: true })
  fromDt: Date | null;

  @Column("date", { name: "TO_DT", nullable: true })
  toDt: Date | null;

  @Column("varchar2", { name: "FROM_SESSION", nullable: true, length: 4 })
  fromSession: string | null;

  @Column("varchar2", { name: "TO_SESSION", nullable: true, length: 4 })
  toSession: string | null;

  @Column("char", { name: "OT_STATUS", nullable: true, length: 1 })
  otStatus: string | null;

  @Column("varchar2", { name: "REASON", nullable: true, length: 50 })
  reason: string | null;

  @Column("number", {
    name: "NOOFDAYS",
    nullable: true,
    precision: 3,
    scale: 1,
  })
  noofdays: number | null;

  @Column("varchar2", { name: "DAY_PERIOD", nullable: true, length: 1 })
  dayPeriod: string | null;

  @Column("varchar2", { name: "APPROVED_STATUS", nullable: true, length: 1 })
  approvedStatus: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 30 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
