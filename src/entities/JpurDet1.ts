import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JpurTran } from "./JpurTran";
import { JmasProduct } from "./JmasProduct";
import { JpurDet11 } from "./JpurDet11";
import { JpurDet12 } from "./JpurDet12";
import { JpurDet13 } from "./JpurDet13";

@Index("PURPROD", ["prodfk"], {})
@Index("PUR_DET1PK", ["purDet1Pk"], { unique: true })
@Entity("JPUR_DET1")
export class JpurDet1 {
  @Column("number", {
    primary: true,
    name: "PUR_DET1PK",
    precision: 8,
    scale: 0,
  })
  purDet1Pk: number;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "SWT", nullable: true, precision: 8, scale: 3 })
  swt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "QUOFK", nullable: true, precision: 8, scale: 0 })
  quofk: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "LWT", nullable: true, precision: 8, scale: 3 })
  lwt: number | null;

  @Column("char", {
    name: "EXCH_CASH",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  exchCash: string | null;

  @Column("number", {
    name: "BOARD_RATE",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  boardRate: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  typeGenfk: number | null;

  @Column("number", { name: "WCPER", nullable: true, precision: 5, scale: 2 })
  wcper: number | null;

  @Column("varchar2", { name: "KARAT", nullable: true, length: 6 })
  karat: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("number", {
    name: "ORDER_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @ManyToOne(() => JpurTran, (jpurTran) => jpurTran.jpurDets)
  @JoinColumn([{ name: "PURFK", referencedColumnName: "purpk" }])
  purfk: JpurTran;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jpurDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk2: JmasProduct;

  @OneToMany(() => JpurDet11, (jpurDet11) => jpurDet11.purDet1Fk)
  jpurDets: JpurDet11[];

  @OneToMany(() => JpurDet12, (jpurDet12) => jpurDet12.purDet1Fk)
  jpurDets2: JpurDet12[];

  @OneToMany(() => JpurDet13, (jpurDet13) => jpurDet13.purDet1Fk)
  jpurDets3: JpurDet13[];
}
