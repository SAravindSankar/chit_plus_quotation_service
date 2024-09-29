import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JpurTran } from "./JpurTran";
import { MasAccounts } from "./MasAccounts";

@Index("PUR_DET2PK", ["purDet2Pk"], { unique: true })
@Entity("JPUR_DET2")
export class JpurDet2 {
  @Column("number", {
    primary: true,
    name: "PUR_DET2PK",
    precision: 8,
    scale: 0,
  })
  purDet2Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 25 })
  typeDesc: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JpurTran, (jpurTran) => jpurTran.jpurDets2)
  @JoinColumn([{ name: "PURFK", referencedColumnName: "purpk" }])
  purfk: JpurTran;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jpurDets2)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;
}
