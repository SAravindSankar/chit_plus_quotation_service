import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BudPdCtr } from "./BudPdCtr";
import { BudYrCtr } from "./BudYrCtr";
import { JhisProdRate } from "./JhisProdRate";
import { JissRecDet } from "./JissRecDet";
import { JissRecDet1 } from "./JissRecDet1";
import { JissVouDet1 } from "./JissVouDet1";
import { JissVouDet11 } from "./JissVouDet11";
import { JlotDet3 } from "./JlotDet3";
import { JlotRecissDet } from "./JlotRecissDet";
import { JmasChrgDet } from "./JmasChrgDet";
import { JmasDealerChrg } from "./JmasDealerChrg";
import { JmasGuarantee } from "./JmasGuarantee";
import { JmasOrderSpec } from "./JmasOrderSpec";
import { MasCompany } from "./MasCompany";
import { JmasProdChrg } from "./JmasProdChrg";
import { JmasProdRate } from "./JmasProdRate";
import { JmasRol } from "./JmasRol";
import { JpurDet1 } from "./JpurDet1";
import { JpurDet13 } from "./JpurDet13";
import { JrecVouDet1 } from "./JrecVouDet1";
import { JrecVouDet11 } from "./JrecVouDet11";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JsalBillDet11 } from "./JsalBillDet11";
import { JsalBillDet12 } from "./JsalBillDet12";
import { JsalCrnDet1 } from "./JsalCrnDet1";
import { JsalOrdDet11 } from "./JsalOrdDet11";
import { JsalOrdDet2 } from "./JsalOrdDet2";
import { JsalQuoDet1 } from "./JsalQuoDet1";
import { JsalQuoDet11 } from "./JsalQuoDet11";
import { JsalRepairDet12 } from "./JsalRepairDet12";
import { MasBom } from "./MasBom";
import { MasEventschDet1 } from "./MasEventschDet1";
import { MasPrice } from "./MasPrice";
import { MasRackProd } from "./MasRackProd";

@Index("BALSTK1", ["companyfk", "delflag", "oldProdCd"], {})
@Index("DAYEND1", ["tagged", "companyfk", "delflag"], {})
@Index(
  "GSDPSTKLPROD",
  [
    "delflag",
    "companyfk",
    "prodpk",
    "gsdp",
    "tagged",
    "stone",
    "preciousStone",
  ],
  {}
)
@Index("HPRODCLASSFK$PRODPK", ["hprodclassfk", "prodpk"], {})
@Index("INDPRODPK", ["prodpk"], {})
@Index("JMASOLDPROD", ["oldProdCd", "oldSubCd"], {})
@Index("JMASPRODUCT", ["prodclasspk", "hprodclassfk"], {})
@Index("JMASPRODUCTREV", ["hprodclassfk", "prodclasspk"], {})
@Index("JMAS_PROD_OLDPROD1", ["oldProdCd", "prodpk"], {})
@Index("MAS1", ["delflag"], {})
@Index("MASPRODIND1", ["companyfk", "rackfk", "delflag", "prodclasspk"], {})
@Index("PNAME", ["name", "companyfk", "delflag"], {})
@Index("PRODIND", ["prodclasspk", "modelNo", "companyfk", "delflag"], {})
@Index(
  "PRODIND2",
  ["prodclasspk", "hprodclassfk", "modelNo", "companyfk", "delflag"],
  {}
)
@Index("PRODRACK", ["prodclasspk", "rackfk", "delflag", "companyfk"], {})
@Index("PRODRACK1", ["rackfk"], {})
@Index("PROD_MODEL_NO", ["modelNo"], {})
@Index("STKCONPROD", ["oldProdCd"], {})
@Index("STNIN", ["stone", "spare", "companyfk", "name"], {})
@Index("STNIN1", ["stone"], {})
@Index("STNIN2", ["spare"], {})
@Index("STNIN3", ["modelNo", "stone", "spare"], {})
@Index("STNIN4", ["modelNo", "stone", "spare", "companyfk"], {})
@Index("STNIN5", ["modelNo", "stone", "spare", "companyfk", "delflag"], {})
@Index("STOCK1", ["prodclasspk", "diamond"], {})
@Index("STOCK2", ["prodclasspk", "stone"], {})
@Index(
  "STOCK35",
  ["prodclasspk", "oldProdCd", "companyfk", "delflag", "tagged"],
  {}
)
@Index("STOCK7", ["prodclasspk", "companyfk"], {})
@Index("STOCK8", ["prodclasspk", "oldProdCd"], {})
@Index("STOCK9", ["prodclasspk", "rackfk"], {})
@Index("TAXPROD", ["staxfk", "companyfk", "delflag", "tagged", "prodpk"], {})
@Index("TAXREPORT2", ["prodclasspk", "staxfk", "delflag", "companyfk"], {})
@Entity("JMAS_PRODUCT")
export class JmasProduct {
  @Column("number", {
    primary: true,
    name: "PRODCLASSPK",
    precision: 8,
    scale: 0,
  })
  prodclasspk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PRODHFK", nullable: true, precision: 8, scale: 0 })
  prodhfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", {
    name: "HPRODCLASSFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  hprodclassfk: number | null;

  @Column("number", {
    name: "HLEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  hlevelNo: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 6, scale: 0 })
  staxfk: number | null;

  @Column("number", { name: "MMINAMT", nullable: true, precision: 8, scale: 2 })
  mminamt: number | null;

  @Column("number", { name: "MMAXAMT", nullable: true, precision: 8, scale: 2 })
  mmaxamt: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 15 })
  shortName: string | null;

  @Column("number", {
    name: "FIRSTLEVELPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  firstlevelpk: number | null;

  @Column("varchar2", { name: "MODEL_NO", nullable: true, length: 30 })
  modelNo: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 30 })
  description: string | null;

  @Column("number", { name: "PRODPK", nullable: true, precision: 8, scale: 0 })
  prodpk: number | null;

  @Column("number", { name: "TAG_NO", nullable: true, precision: 5, scale: 0 })
  tagNo: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 8, scale: 0 })
  rackfk: number | null;

  @Column("char", { name: "WEIGHT_RATE", nullable: true, length: 1 })
  weightRate: string | null;

  @Column("char", { name: "PRODID", nullable: true, length: 1 })
  prodid: string | null;

  @Column("number", {
    name: "GS1112FK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  gs1112Fk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("char", { name: "TAGGED", nullable: true, length: 1 })
  tagged: string | null;

  @Column("char", { name: "STONE_ITEM", nullable: true, length: 1 })
  stoneItem: string | null;

  @Column("char", { name: "OTHER", nullable: true, length: 1 })
  other: string | null;

  @Column("char", { name: "STONE", nullable: true, length: 1 })
  stone: string | null;

  @Column("char", { name: "DIAMOND", nullable: true, length: 1 })
  diamond: string | null;

  @Column("char", { name: "WASTAGE", nullable: true, length: 1 })
  wastage: string | null;

  @Column("char", { name: "REPAIRITEM", nullable: true, length: 1 })
  repairitem: string | null;

  @Column("char", { name: "SPARE", nullable: true, length: 1 })
  spare: string | null;

  @Column("char", {
    primary: true,
    name: "OLD_PROD_CD",
    nullable: true,
    length: 5,
  })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("char", { name: "PAIR", nullable: true, length: 1 })
  pair: string | null;

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("char", { name: "NEW_OLD_PROD", nullable: true, length: 3 })
  newOldProd: string | null;

  @Column("char", { name: "NEW_OLD_SUB", nullable: true, length: 3 })
  newOldSub: string | null;

  @Column("number", { name: "OP_PCS", nullable: true, precision: 10, scale: 0 })
  opPcs: number | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", {
    name: "MINUS_PCS",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  minusPcs: number | null;

  @Column("number", {
    name: "PLUS_PCS",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  plusPcs: number | null;

  @Column("number", {
    name: "PLUS_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  plusWt: number | null;

  @Column("number", {
    name: "MINUS_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  minusWt: number | null;

  @Column("number", { name: "CL_PCS", nullable: true, precision: 10, scale: 0 })
  clPcs: number | null;

  @Column("number", { name: "CL_WT", nullable: true, precision: 12, scale: 3 })
  clWt: number | null;

  @Column("number", {
    name: "YEAR_OP_PCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  yearOpPcs: number | null;

  @Column("number", {
    name: "YEAR_OP_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  yearOpWt: number | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("char", { name: "CONTEMP", nullable: true, length: 1 })
  contemp: string | null;

  @Column("char", { name: "PRECIOUS_STONE", nullable: true, length: 1 })
  preciousStone: string | null;

  @Column("number", {
    name: "TRAN_PRICE_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPriceDetfk: number | null;

  @Column("char", { name: "RATE_CUT", nullable: true, length: 1 })
  rateCut: string | null;

  @Column("char", { name: "NETWTCAL", nullable: true, length: 1 })
  netwtcal: string | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "ERATE", nullable: true, precision: 10, scale: 2 })
  erate: number | null;

  @Column("varchar2", { name: "ABSOLETE", nullable: true, length: 5 })
  absolete: string | null;

  @Column("number", {
    name: "PUR_UOMFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  purUomfk: number | null;

  @Column("char", { name: "AP_IND", nullable: true, length: 1 })
  apInd: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", {
    name: "CON_FAC",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  conFac: number | null;

  @Column("number", {
    name: "SAL_UOMFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  salUomfk: number | null;

  @Column("number", {
    name: "SALE_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  saleRate: number | null;

  @Column("varchar2", { name: "P_SIZE", nullable: true, length: 10 })
  pSize: string | null;

  @Column("number", {
    name: "REFPRODPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refprodpk: number | null;

  @Column("char", { name: "DATA_VISIBLE", nullable: true, length: 1 })
  dataVisible: string | null;

  @OneToMany(() => BudPdCtr, (budPdCtr) => budPdCtr.prodfk)
  budPdCtrs: BudPdCtr[];

  @OneToMany(() => BudYrCtr, (budYrCtr) => budYrCtr.prodfk)
  budYrCtrs: BudYrCtr[];

  @OneToMany(() => JhisProdRate, (jhisProdRate) => jhisProdRate.prodclassfk)
  jhisProdRates: JhisProdRate[];

  @OneToMany(() => JissRecDet, (jissRecDet) => jissRecDet.prodfk)
  jissRecDets: JissRecDet[];

  @OneToMany(() => JissRecDet1, (jissRecDet1) => jissRecDet1.prodfk)
  jissRecDets2: JissRecDet1[];

  @OneToMany(() => JissVouDet1, (jissVouDet1) => jissVouDet1.prodfk)
  jissVouDets: JissVouDet1[];

  @OneToMany(() => JissVouDet11, (jissVouDet11) => jissVouDet11.prodfk)
  jissVouDets2: JissVouDet11[];

  @OneToMany(() => JlotDet3, (jlotDet3) => jlotDet3.setProdfk)
  jlotDets: JlotDet3[];

  @OneToMany(() => JlotRecissDet, (jlotRecissDet) => jlotRecissDet.prodfk)
  jlotRecissDets: JlotRecissDet[];

  @OneToMany(() => JmasChrgDet, (jmasChrgDet) => jmasChrgDet.prodChrgfk)
  jmasChrgDets: JmasChrgDet[];

  @OneToMany(() => JmasDealerChrg, (jmasDealerChrg) => jmasDealerChrg.prodfk)
  jmasDealerChrgs: JmasDealerChrg[];

  @OneToMany(() => JmasGuarantee, (jmasGuarantee) => jmasGuarantee.prodfk)
  jmasGuarantees: JmasGuarantee[];

  @OneToMany(() => JmasOrderSpec, (jmasOrderSpec) => jmasOrderSpec.prodclassfk)
  jmasOrderSpecs: JmasOrderSpec[];

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.jmasProducts)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @OneToMany(() => JmasProdChrg, (jmasProdChrg) => jmasProdChrg.prodfk)
  jmasProdChrgs: JmasProdChrg[];

  @OneToMany(() => JmasProdRate, (jmasProdRate) => jmasProdRate.prodclassfk)
  jmasProdRates: JmasProdRate[];

  @OneToMany(() => JmasRol, (jmasRol) => jmasRol.prodfk)
  jmasRols: JmasRol[];

  @OneToMany(() => JpurDet1, (jpurDet1) => jpurDet1.prodfk2)
  jpurDets: JpurDet1[];

  @OneToMany(() => JpurDet13, (jpurDet13) => jpurDet13.prodfk)
  jpurDets2: JpurDet13[];

  @OneToMany(() => JrecVouDet1, (jrecVouDet1) => jrecVouDet1.prodfk)
  jrecVouDets: JrecVouDet1[];

  @OneToMany(() => JrecVouDet11, (jrecVouDet11) => jrecVouDet11.prodfk)
  jrecVouDets2: JrecVouDet11[];

  @OneToMany(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.prodfk2)
  jsalBillDets: JsalBillDet1[];

  @OneToMany(() => JsalBillDet11, (jsalBillDet11) => jsalBillDet11.prodfk2)
  jsalBillDets2: JsalBillDet11[];

  @OneToMany(() => JsalBillDet12, (jsalBillDet12) => jsalBillDet12.prodfk)
  jsalBillDets3: JsalBillDet12[];

  @OneToMany(() => JsalCrnDet1, (jsalCrnDet1) => jsalCrnDet1.prodfk)
  jsalCrnDets: JsalCrnDet1[];

  @OneToMany(() => JsalOrdDet11, (jsalOrdDet11) => jsalOrdDet11.prodfk)
  jsalOrdDets: JsalOrdDet11[];

  @OneToMany(() => JsalOrdDet2, (jsalOrdDet2) => jsalOrdDet2.prodfk)
  jsalOrdDets2: JsalOrdDet2[];

  @OneToMany(() => JsalQuoDet1, (jsalQuoDet1) => jsalQuoDet1.prodfk)
  jsalQuoDets: JsalQuoDet1[];

  @OneToMany(() => JsalQuoDet11, (jsalQuoDet11) => jsalQuoDet11.prodfk)
  jsalQuoDets2: JsalQuoDet11[];

  @OneToMany(() => JsalRepairDet12, (jsalRepairDet12) => jsalRepairDet12.prodfk)
  jsalRepairDets: JsalRepairDet12[];

  @OneToMany(() => MasBom, (masBom) => masBom.prodfk)
  masBoms: MasBom[];

  @OneToMany(
    () => MasEventschDet1,
    (masEventschDet1) => masEventschDet1.prodfk2
  )
  masEventschDets: MasEventschDet1[];

  @OneToMany(() => MasPrice, (masPrice) => masPrice.prodfk)
  masPrices: MasPrice[];

  @OneToMany(() => MasRackProd, (masRackProd) => masRackProd.prodfk)
  masRackProds: MasRackProd[];
}
