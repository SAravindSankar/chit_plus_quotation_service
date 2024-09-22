import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008336", ["tagpk"], { unique: true })
@Entity("TAG_HISTORY")
export class TagHistory {
  @Column("number", { primary: true, name: "TAGPK", precision: 8, scale: 0 })
  tagpk: number;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "ALTTAGFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  alttagfk: number | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "PRODTAGNO", nullable: true, length: 5 })
  prodtagno: string | null;

  @Column("number", { name: "TAGNO", nullable: true, precision: 6, scale: 0 })
  tagno: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("date", { name: "TDATE", nullable: true })
  tdate: Date | null;

  @Column("date", { name: "BDATE", nullable: true })
  bdate: Date | null;

  @Column("varchar2", { name: "SDATE", nullable: true, length: 30 })
  sdate: string | null;

  @Column("date", { name: "ISS_DATE", nullable: true })
  issDate: Date | null;

  @Column("char", { name: "REF_IND", nullable: true, length: 1 })
  refInd: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("varchar2", { name: "ST_MODE", nullable: true, length: 10 })
  stMode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
