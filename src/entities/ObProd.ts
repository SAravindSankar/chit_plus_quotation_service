import { Column, Entity, Index } from "typeorm";

@Index("OB_PRODPK", ["obProdpk"], { unique: true })
@Entity("OB_PROD")
export class ObProd {
  @Column("number", {
    primary: true,
    name: "OB_PRODPK",
    precision: 8,
    scale: 0,
  })
  obProdpk: number;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "CARAT", nullable: true, precision: 8, scale: 3 })
  carat: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 10, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 10, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "VALUE", nullable: true, precision: 12, scale: 2 })
  value: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 14, scale: 2 })
  opBal: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("number", {
    name: "OB_REFFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  obReffk: number | null;

  @Column("number", { name: "WCOST", nullable: true, precision: 10, scale: 2 })
  wcost: number | null;
}
