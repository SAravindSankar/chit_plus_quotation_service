import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007795", ["crnDet15Pk"], { unique: true })
@Entity("JSAL_CRN_DET15")
export class JsalCrnDet15 {
  @Column("number", {
    primary: true,
    name: "CRN_DET15PK",
    precision: 8,
    scale: 0,
  })
  crnDet15Pk: number;

  @Column("number", { name: "CRNFK", nullable: true, precision: 8, scale: 0 })
  crnfk: number | null;

  @Column("char", { name: "PAY_MODE", nullable: true, length: 5 })
  payMode: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 40 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "PAY_AMT",
    nullable: true,
    precision: 14,
    scale: 2,
  })
  payAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "REF_ACC", nullable: true, length: 40 })
  refAcc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
