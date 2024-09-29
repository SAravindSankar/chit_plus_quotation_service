import { Column, Entity } from "typeorm";

@Entity("TDAY_REC_BILL")
export class TdayRecBill {
  @Column("number", {
    name: "REC_BILLPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recBillpk: number | null;

  @Column("number", { name: "RECFK", nullable: true, precision: 8, scale: 0 })
  recfk: number | null;

  @Column("number", { name: "BILLFK", nullable: true, precision: 8, scale: 0 })
  billfk: number | null;

  @Column("number", {
    name: "REC_BILL_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  recBillAmt: number | null;

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

  @Column("number", {
    name: "ADJ_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjDocfk: number | null;

  @Column("number", {
    name: "ADJ_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjTranDocfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "RECDOCFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  recdocfk: number | null;
}
