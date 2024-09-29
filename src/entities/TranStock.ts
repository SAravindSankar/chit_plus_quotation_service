import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { MasDoc } from "./MasDoc";

@Index("BANCHTRAN", ["branchfk"], {})
@Index("BITMDOCFK", ["docfk"], {})
@Index("GSTRAN", ["gsstkfk"], {})
@Index("PARTYTRAN", ["partyfk"], {})
@Index("RECISS", ["recIss"], {})
@Index("TRANCT", ["tranStockpk"], { unique: true })
@Index("TRANST", ["tranSt"], {})
@Index("TSTOCKSM", ["prodfk"], {})
@Entity("TRAN_STOCK")
export class TranStock {
  @Column("number", {
    primary: true,
    name: "TRAN_STOCKPK",
    precision: 8,
    scale: 0,
  })
  tranStockpk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 6, scale: 0 })
  tranNo: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("char", { name: "TRAN_ST", nullable: true, length: 1 })
  tranSt: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 6, scale: 0 })
  partyfk: number | null;

  @Column("char", { name: "REC_ISS", nullable: true, length: 1 })
  recIss: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "QTY_WT", nullable: true, precision: 8, scale: 3 })
  qtyWt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 5 })
  oldSubCd: string | null;

  @Column("char", { name: "NONFLAG", nullable: true, length: 1 })
  nonflag: string | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "GSSTKREFFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  gsstkreffk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 10, scale: 3 })
  nwt: number | null;

  @Column("number", {
    name: "TEMPAMT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  tempamt: number | null;

  @Column("char", { name: "REPAIR", nullable: true, length: 1 })
  repair: string | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "LWT", nullable: true, precision: 8, scale: 3 })
  lwt: number | null;

  @Column("number", {
    name: "KARAT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  karat: number | null;

  @Column("char", { name: "WT_AMT", nullable: true, length: 1 })
  wtAmt: string | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "TRAN_TYPE", nullable: true, length: 1 })
  tranType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "TRAN_PRICE_DETFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranPriceDetfk: number | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 9, scale: 0 })
  taxfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tranStocks)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.tranStocks)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk2: MasDoc;
}
