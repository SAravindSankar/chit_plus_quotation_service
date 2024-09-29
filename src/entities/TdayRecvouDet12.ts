import { Column, Entity } from "typeorm";

@Entity("TDAY_RECVOU_DET12")
export class TdayRecvouDet12 {
  @Column("number", {
    name: "REC_VOU_DET12PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVouDet12Pk: number | null;

  @Column("number", {
    name: "REC_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVouDet1Fk: number | null;

  @Column("number", {
    name: "ISS_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVouDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "AWT", nullable: true, precision: 8, scale: 3 })
  awt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CHRGFK", nullable: true, precision: 8, scale: 0 })
  chrgfk: number | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 30 })
  typeDesc: string | null;

  @Column("number", { name: "ONWHICH", nullable: true, precision: 8, scale: 2 })
  onwhich: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  addRateAmt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  addRatePer: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
