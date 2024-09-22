import { Column, Entity } from "typeorm";

@Entity("PAY_ODPERMISSION")
export class PayOdpermission {
  @Column("number", {
    name: "ODPERM_PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  odpermPk: number | null;

  @Column("char", { name: "OP_TYPE", nullable: true, length: 1 })
  opType: string | null;

  @Column("number", { name: "REF_NO", nullable: true, precision: 10, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("date", { name: "FM_TIME", nullable: true })
  fmTime: Date | null;

  @Column("date", { name: "TO_TIME", nullable: true })
  toTime: Date | null;

  @Column("varchar2", { name: "REASON", nullable: true, length: 100 })
  reason: string | null;

  @Column("number", { name: "UNITFK", nullable: true, precision: 8, scale: 0 })
  unitfk: number | null;

  @Column("number", {
    name: "APPROVEFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  approvefk: number | null;

  @Column("char", { name: "ODPERM_ST", nullable: true, length: 1 })
  odpermSt: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
