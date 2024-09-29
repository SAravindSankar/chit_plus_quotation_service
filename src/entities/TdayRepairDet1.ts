import { Column, Entity } from "typeorm";

@Entity("TDAY_REPAIR_DET1")
export class TdayRepairDet1 {
  @Column("number", {
    name: "REPAIR_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairDet1Pk: number | null;

  @Column("number", {
    name: "REPAIRFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", {
    name: "NO_STONES",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  noStones: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "VALUE", nullable: true, precision: 10, scale: 2 })
  value: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 5, scale: 0 })
  docNo: number | null;

  @Column("varchar2", { name: "DOC_DATE", nullable: true, length: 15 })
  docDate: string | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("char", { name: "REP_STA", nullable: true, length: 1 })
  repSta: string | null;

  @Column("number", {
    name: "JSAL_BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jsalBillDet1Fk: number | null;

  @Column("number", {
    name: "JISS_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jissVouDet1Fk: number | null;

  @Column("number", {
    name: "JREC_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jrecVouDet1Fk: number | null;

  @Column("varchar2", { name: "DISCRIP", nullable: true, length: 30 })
  discrip: string | null;

  @Column("date", { name: "ISS_DATE", nullable: true })
  issDate: Date | null;

  @Column("date", { name: "REC_DATE", nullable: true })
  recDate: Date | null;

  @Column("date", { name: "BILL_DATE", nullable: true })
  billDate: Date | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "JISS_REC_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jissRecDetfk: number | null;

  @Column("number", { name: "AWT", nullable: true, precision: 8, scale: 3 })
  awt: number | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
