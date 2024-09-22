import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL_DET13")
export class TdayBillDet13 {
  @Column("number", { name: "BILL_DET13PK", precision: 8, scale: 0 })
  billDet13Pk: number;

  @Column("number", {
    name: "BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDet1Fk: number | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 15 })
  serialNo: string | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

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
