import { Column, Entity } from "typeorm";

@Entity("DAY129_REC_BILL")
export class Day129RecBill {
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
    name: "RECDOCFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  recdocfk: number | null;
}
