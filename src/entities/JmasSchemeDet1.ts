import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007713", ["schDet1Pk"], { unique: true })
@Entity("JMAS_SCHEME_DET1")
export class JmasSchemeDet1 {
  @Column("number", {
    primary: true,
    name: "SCH_DET1PK",
    precision: 8,
    scale: 0,
  })
  schDet1Pk: number;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 6, scale: 0 })
  schFk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "BR_LPER_GM",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  brLperGm: number | null;

  @Column("number", {
    name: "BR_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  brLpert: number | null;

  @Column("number", {
    name: "MC_LPER_GM",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  mcLperGm: number | null;

  @Column("number", {
    name: "MC_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  mcLpert: number | null;

  @Column("number", {
    name: "WC_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  wcLpert: number | null;

  @Column("number", {
    name: "ORD_STN_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  ordStnLpert: number | null;

  @Column("number", {
    name: "PRE_STN_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  preStnLpert: number | null;

  @Column("number", {
    name: "DIA_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  diaLpert: number | null;

  @Column("char", { name: "MC_PROD_CHRG", nullable: true, length: 1 })
  mcProdChrg: string | null;

  @Column("char", { name: "WC_PROD_CHRG", nullable: true, length: 1 })
  wcProdChrg: string | null;

  @Column("number", {
    name: "WCWT_LPERT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  wcwtLpert: number | null;

  @Column("char", { name: "WASTWT_OPER", nullable: true, length: 1 })
  wastwtOper: string | null;

  @Column("char", { name: "MCPER_OPER", nullable: true, length: 1 })
  mcperOper: string | null;

  @Column("char", { name: "DIA_OPER", nullable: true, length: 1 })
  diaOper: string | null;

  @Column("char", { name: "PRECST_OPER", nullable: true, length: 1 })
  precstOper: string | null;

  @Column("char", { name: "ORDST_OPER", nullable: true, length: 1 })
  ordstOper: string | null;

  @Column("char", { name: "WC_OPER", nullable: true, length: 1 })
  wcOper: string | null;

  @Column("char", { name: "MC_OPER", nullable: true, length: 1 })
  mcOper: string | null;

  @Column("char", { name: "BRD_OPER", nullable: true, length: 1 })
  brdOper: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
