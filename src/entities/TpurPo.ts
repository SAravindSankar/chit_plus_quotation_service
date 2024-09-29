import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasBranch } from "./MasBranch";
import { MasVendor } from "./MasVendor";
import { TpurPoDet } from "./TpurPoDet";

@Index("TPUR_POPK", ["tpurPopk"], { unique: true })
@Entity("TPUR_PO")
export class TpurPo {
  @Column("number", {
    primary: true,
    name: "TPUR_POPK",
    precision: 8,
    scale: 0,
  })
  tpurPopk: number;

  @Column("number", { name: "PO_NO", precision: 6, scale: 0 })
  poNo: number;

  @Column("date", { name: "PO_DATE" })
  poDate: Date;

  @Column("number", {
    name: "AMEND_NO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  amendNo: number | null;

  @Column("number", {
    name: "TPUR_POFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tpurPofk: number | null;

  @Column("varchar2", { name: "VEN_OUR_CODE", nullable: true, length: 10 })
  venOurCode: string | null;

  @Column("varchar2", { name: "QUO_NO", nullable: true, length: 10 })
  quoNo: string | null;

  @Column("date", { name: "QUO_DATE", nullable: true })
  quoDate: Date | null;

  @Column("varchar2", { name: "ENQ_NO", nullable: true, length: 10 })
  enqNo: string | null;

  @Column("date", { name: "ENQ_DATE", nullable: true })
  enqDate: Date | null;

  @Column("number", {
    name: "TPUR_INDPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tpurIndpfk: number | null;

  @Column("number", {
    name: "CONSIGNEE_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  consigneeAddfk: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "ORDER_BY", nullable: true, length: 10 })
  orderBy: string | null;

  @Column("number", {
    name: "TRANSPORTVENDORFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  transportvendorfk: number | null;

  @Column("varchar2", { name: "ORDER_MODE", nullable: true, length: 30 })
  orderMode: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("varchar2", { name: "PO_ST", nullable: true, length: 1 })
  poSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("date", { name: "VALIDDATE", nullable: true })
  validdate: Date | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tpurPos)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasVendor, (masVendor) => masVendor.tpurPos)
  @JoinColumn([{ name: "VENDORFK", referencedColumnName: "vendorpk" }])
  vendorfk: MasVendor;

  @OneToMany(() => TpurPoDet, (tpurPoDet) => tpurPoDet.tpurPofk)
  tpurPoDets: TpurPoDet[];
}
