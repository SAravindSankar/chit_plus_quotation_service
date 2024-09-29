import { Column, Entity } from "typeorm";

@Entity("TGR_DC_DET11")
export class TgrDcDet11 {
  @Column("varchar2", { name: "BATCH_SERIAL_NO", nullable: true, length: 40 })
  batchSerialNo: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL_NO1", nullable: true, length: 40 })
  batchSerialNo1: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL_NO2", nullable: true, length: 40 })
  batchSerialNo2: string | null;

  @Column("date", { name: "EXPIRY_DATE", nullable: true })
  expiryDate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "TSAL_BILL_DET1FK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalBillDet1Fk: number | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", {
    name: "TGR_DC_DET11PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet11Pk: number | null;

  @Column("number", {
    name: "TGR_DC_DET1PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet1Pk: number | null;

  @Column("varchar2", { name: "BATCH_NO", nullable: true, length: 10 })
  batchNo: string | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 20 })
  serialNo: string | null;

  @Column("number", {
    name: "BATCH_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  batchQty: number | null;

  @Column("varchar2", { name: "BATCH_SERIAL", nullable: true, length: 1 })
  batchSerial: string | null;
}
