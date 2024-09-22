import { Column, Entity, Index } from "typeorm";

@Index("TSAL_DCPK", ["tsalDcpk"], { unique: true })
@Entity("TSAL_DC")
export class TsalDc {
  @Column("number", {
    primary: true,
    name: "TSAL_DCPK",
    precision: 10,
    scale: 0,
  })
  tsalDcpk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "DC_NO", nullable: true, precision: 10, scale: 0 })
  dcNo: number | null;

  @Column("date", { name: "DC_DATE", nullable: true })
  dcDate: Date | null;

  @Column("varchar2", { name: "PURPOSE", nullable: true, length: 20 })
  purpose: string | null;

  @Column("number", {
    name: "TSAL_BILLFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalBillfk: number | null;

  @Column("date", { name: "WHEN_RET", nullable: true })
  whenRet: Date | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

  @Column("number", {
    name: "OTH_ADD",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  netAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

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

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 10, scale: 0 })
  custfk: number | null;

  @Column("varchar2", { name: "TSAL_DCST", nullable: true, length: 1 })
  tsalDcst: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 10, scale: 0 })
  staxfk: number | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("varchar2", { name: "TAX_TYPE", nullable: true, length: 1 })
  taxType: string | null;

  @Column("number", {
    name: "SALES_MANFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  salesManfk: number | null;

  @Column("varchar2", { name: "SAMPLE", nullable: true, length: 1 })
  sample: string | null;

  @Column("varchar2", { name: "DC_ST", nullable: true, length: 1 })
  dcSt: string | null;

  @Column("number", { name: "DC_DOC", nullable: true, precision: 10, scale: 0 })
  dcDoc: number | null;
}
