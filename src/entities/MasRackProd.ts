import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { JmasProduct } from "./JmasProduct";
import { MasRack } from "./MasRack";

@Index("RACK_PRODPK", ["rackProdpk"], { unique: true })
@Entity("MAS_RACK_PROD")
export class MasRackProd {
  @Column("number", {
    primary: true,
    name: "RACK_PRODPK",
    precision: 6,
    scale: 0,
  })
  rackProdpk: number;

  @Column("date", { name: "FROM_DATE" })
  fromDate: Date;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

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

  @Column("number", {
    name: "ST_WEIGHT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stWeight: number | null;

  @Column("number", {
    name: "ST_PIECES",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  stPieces: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masRackProds)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.masRackProds)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => MasRack, (masRack) => masRack.masRackProds)
  @JoinColumn([{ name: "RACKFK", referencedColumnName: "rackpk" }])
  rackfk: MasRack;
}
