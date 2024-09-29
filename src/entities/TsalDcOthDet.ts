import { Column, Entity, Index } from "typeorm";

@Index("DC_OTH_DETPK", ["dcOthDetpk"], { unique: true })
@Entity("TSAL_DC_OTH_DET")
export class TsalDcOthDet {
  @Column("number", {
    primary: true,
    name: "DC_OTH_DETPK",
    precision: 10,
    scale: 0,
  })
  dcOthDetpk: number;

  @Column("number", {
    name: "TSAL_DCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalDcfk: number | null;

  @Column("number", {
    name: "HYPO_TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  hypoTranAddfk: number | null;

  @Column("number", {
    name: "DELI_TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  deliTranAddfk: number | null;

  @Column("number", { name: "DC_NO", nullable: true, precision: 10, scale: 0 })
  dcNo: number | null;

  @Column("date", { name: "DC_DATE", nullable: true })
  dcDate: Date | null;

  @Column("varchar2", { name: "DOC_THRO", nullable: true, length: 20 })
  docThro: string | null;

  @Column("varchar2", { name: "PAY_TERMS", nullable: true, length: 20 })
  payTerms: string | null;

  @Column("varchar2", { name: "GOODS_DESP", nullable: true, length: 20 })
  goodsDesp: string | null;

  @Column("varchar2", { name: "LR_NO", nullable: true, length: 20 })
  lrNo: string | null;

  @Column("date", { name: "LR_DATE", nullable: true })
  lrDate: Date | null;

  @Column("varchar2", { name: "FREIGHT", nullable: true, length: 20 })
  freight: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;
}
