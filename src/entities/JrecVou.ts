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
import { JrecVouDet1 } from "./JrecVouDet1";
import { JrecVouDet2 } from "./JrecVouDet2";

@Index("REC_VOUPK", ["recVoupk"], { unique: true })
@Entity("JREC_VOU")
export class JrecVou {
  @Column("number", {
    primary: true,
    name: "REC_VOUPK",
    precision: 8,
    scale: 0,
  })
  recVoupk: number;

  @Column("number", {
    name: "REC_VOU_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVouNo: number | null;

  @Column("date", { name: "REC_VOU_DATE", nullable: true })
  recVouDate: Date | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("char", { name: "REC_VOU_ST", nullable: true, length: 1 })
  recVouSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 50 })
  refNo: string | null;

  @Column("varchar2", { name: "REC_VOU_TYPE", nullable: true, length: 20 })
  recVouType: string | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  netAmt: number | null;

  @Column("char", { name: "BILL_TYPE", nullable: true, length: 1 })
  billType: string | null;

  @Column("number", {
    name: "RECD_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  recdAmt: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("number", { name: "ADV_AMT", nullable: true, precision: 8, scale: 2 })
  advAmt: number | null;

  @Column("number", { name: "ADJ_AMT", nullable: true, precision: 8, scale: 2 })
  adjAmt: number | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("char", { name: "REPAIR", nullable: true, length: 1 })
  repair: string | null;

  @Column("number", { name: "STD_QTY", nullable: true, precision: 8, scale: 3 })
  stdQty: number | null;

  @Column("char", { name: "FOR_REC", nullable: true, length: 1 })
  forRec: string | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "REC_TYPE", nullable: true, length: 1 })
  recType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "IN_CHAFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  inChafk: number | null;

  @ManyToOne(() => JrecVou, (jrecVou) => jrecVou.jrecVous)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "recVoupk" }])
  accfk: JrecVou;

  @OneToMany(() => JrecVou, (jrecVou) => jrecVou.accfk)
  jrecVous: JrecVou[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jrecVous)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasVendor, (masVendor) => masVendor.jrecVous)
  @JoinColumn([{ name: "VENDORFK", referencedColumnName: "vendorpk" }])
  vendorfk: MasVendor;

  @OneToMany(() => JrecVouDet1, (jrecVouDet1) => jrecVouDet1.recVoufk)
  jrecVouDets: JrecVouDet1[];

  @OneToMany(() => JrecVouDet2, (jrecVouDet2) => jrecVouDet2.recVoufk)
  jrecVouDets2: JrecVouDet2[];
}
