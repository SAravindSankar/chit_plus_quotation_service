import { Column, Entity } from "typeorm";

@Entity("TSER_JC")
export class TserJc {
  @Column("number", { name: "JCPK", nullable: true, precision: 10, scale: 0 })
  jcpk: number | null;

  @Column("number", { name: "JC_NO", nullable: true, precision: 10, scale: 0 })
  jcNo: number | null;

  @Column("date", { name: "JC_DATE", nullable: true })
  jcDate: Date | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "WARRANTY", nullable: true, length: 5 })
  warranty: string | null;

  @Column("varchar2", { name: "FP_INDICATOR", nullable: true, length: 1 })
  fpIndicator: string | null;

  @Column("varchar2", { name: "IN_OUT_HOUSE", nullable: true, length: 1 })
  inOutHouse: string | null;

  @Column("number", { name: "SRAFK", nullable: true, precision: 10, scale: 0 })
  srafk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 10, scale: 0 })
  custfk: number | null;

  @Column("number", { name: "CARDFK", nullable: true, precision: 10, scale: 0 })
  cardfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "SER_CARDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  serCardfk: number | null;

  @Column("number", {
    name: "CARD_SCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  cardSchfk: number | null;

  @Column("date", { name: "COMPLETED_DATE", nullable: true })
  completedDate: Date | null;

  @Column("number", { name: "SDOCFK", nullable: true, precision: 10, scale: 0 })
  sdocfk: number | null;

  @Column("number", { name: "LDOCFK", nullable: true, precision: 10, scale: 0 })
  ldocfk: number | null;

  @Column("number", {
    name: "STRAN_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  stranDocfk: number | null;

  @Column("number", {
    name: "LTRAN_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ltranDocfk: number | null;

  @Column("varchar2", { name: "JC_ST", nullable: true, length: 1 })
  jcSt: string | null;

  @Column("number", {
    name: "SBILLFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  sbillfk: number | null;

  @Column("number", {
    name: "LBILLFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  lbillfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("varchar2", { name: "JC_TYPE", nullable: true, length: 10 })
  jcType: string | null;

  @Column("number", { name: "SO_FK", nullable: true, precision: 10, scale: 0 })
  soFk: number | null;

  @Column("varchar2", { name: "SO_NO", nullable: true, length: 50 })
  soNo: string | null;

  @Column("varchar2", { name: "CARD_ST", nullable: true, length: 50 })
  cardSt: string | null;

  @Column("number", { name: "BILLFK", nullable: true, precision: 10, scale: 0 })
  billfk: number | null;

  @Column("date", { name: "CLOSED_DT", nullable: true })
  closedDt: Date | null;

  @Column("varchar2", { name: "CLOSED_TIME", nullable: true, length: 50 })
  closedTime: string | null;
}
