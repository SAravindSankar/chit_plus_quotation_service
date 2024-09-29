import { Column, Entity, Index } from "typeorm";

@Index("TSAL_DC_DET12PK", ["tsalDcDet12Pk"], { unique: true })
@Entity("TSAL_DC_DET12")
export class TsalDcDet12 {
  @Column("number", {
    primary: true,
    name: "TSAL_DC_DET12PK",
    precision: 10,
    scale: 0,
  })
  tsalDcDet12Pk: number;

  @Column("number", {
    name: "TSAL_DC_DET1FK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalDcDet1Fk: number | null;

  @Column("varchar2", { name: "BATCH_SERIAL", nullable: true, length: 1 })
  batchSerial: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL_NO", nullable: true, length: 20 })
  batchSerialNo: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL_NO1", nullable: true, length: 15 })
  batchSerialNo1: string | null;

  @Column("varchar2", { name: "BATCH_SERIAL_NO2", nullable: true, length: 10 })
  batchSerialNo2: string | null;

  @Column("number", {
    name: "BATCH_SERIAL_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  batchSerialQty: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;
}
