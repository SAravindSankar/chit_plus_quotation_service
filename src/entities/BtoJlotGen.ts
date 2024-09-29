import { Column, Entity } from "typeorm";

@Entity("BTO_JLOT_GEN")
export class BtoJlotGen {
  @Column("number", { name: "LOTPK", nullable: true, precision: 8, scale: 0 })
  lotpk: number | null;

  @Column("number", { name: "LOT_NO", nullable: true, precision: 8, scale: 0 })
  lotNo: number | null;

  @Column("date", { name: "LOT_DATE", nullable: true })
  lotDate: Date | null;

  @Column("number", { name: "LOT_PCS", nullable: true, precision: 4, scale: 0 })
  lotPcs: number | null;

  @Column("number", { name: "PCS_TAG", nullable: true, precision: 4, scale: 0 })
  pcsTag: number | null;

  @Column("number", { name: "LOT_WT", nullable: true, precision: 8, scale: 3 })
  lotWt: number | null;

  @Column("number", {
    name: "TAG_FROM",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  tagFrom: number | null;

  @Column("number", { name: "TAG_TO", nullable: true, precision: 5, scale: 0 })
  tagTo: number | null;

  @Column("number", {
    name: "NOOFTAGS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  nooftags: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("number", {
    name: "BOARD_PURITY",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  boardPurity: number | null;

  @Column("number", {
    name: "BOARD_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  boardRate: number | null;

  @Column("number", { name: "CARAT", nullable: true, precision: 8, scale: 3 })
  carat: number | null;

  @Column("char", { name: "TAGGED", nullable: true, length: 1 })
  tagged: string | null;

  @Column("char", { name: "ORD_REP", nullable: true, length: 1 })
  ordRep: string | null;

  @Column("char", { name: "LOT_REF", nullable: true, length: 1 })
  lotRef: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "OTH_CHRG", nullable: true, length: 20 })
  othChrg: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 50 })
  remarks: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

  @Column("number", {
    name: "REC_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVouDet1Fk: number | null;

  @Column("number", {
    name: "ORD_REPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  ordRepfk: number | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "LOT_STATUS", nullable: true, length: 1 })
  lotStatus: string | null;

  @Column("char", { name: "COMPLETED", nullable: true, length: 1 })
  completed: string | null;
}
