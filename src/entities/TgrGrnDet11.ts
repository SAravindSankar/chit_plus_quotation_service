import { Column, Entity, Index } from "typeorm";

@Index("SYS_C0026099", ["tgrGrnDet11Pk"], { unique: true })
@Entity("TGR_GRN_DET11")
export class TgrGrnDet11 {
  @Column("number", {
    primary: true,
    name: "TGR_GRN_DET11PK",
    precision: 8,
    scale: 0,
  })
  tgrGrnDet11Pk: number;

  @Column("number", {
    name: "TGR_GRN_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrGrnDet1Fk: number | null;

  @Column("number", {
    name: "TSAL_BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tsalBillDet1Fk: number | null;

  @Column("varchar2", { name: "BATCH_NO", nullable: true, length: 10 })
  batchNo: string | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 20 })
  serialNo: string | null;

  @Column("number", {
    name: "BATCH_QTY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  batchQty: number | null;

  @Column("varchar2", { name: "BATCH_SERIAL", nullable: true, length: 40 })
  batchSerial: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL1", nullable: true, length: 40 })
  batchSerial1: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL2", nullable: true, length: 40 })
  batchSerial2: string | null;

  @Column("date", { name: "EXPIRY_DATE", nullable: true })
  expiryDate: Date | null;

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

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;
}
