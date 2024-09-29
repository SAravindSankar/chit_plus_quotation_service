import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasVendor } from "./MasVendor";
import { MasBranch } from "./MasBranch";
import { OldtarUsers } from "./OldtarUsers";
import { JissVouDet1 } from "./JissVouDet1";

@Index("ISS_VOUPK", ["issVoupk"], { unique: true })
@Entity("JISS_VOU")
export class JissVou {
  @Column("number", {
    primary: true,
    name: "ISS_VOUPK",
    precision: 8,
    scale: 0,
  })
  issVoupk: number;

  @Column("number", { name: "ISS_VOU_NO", precision: 8, scale: 0 })
  issVouNo: number;

  @Column("date", { name: "ISS_VOU_DATE" })
  issVouDate: Date;

  @Column("varchar2", { name: "ISS_VOU_TYPE", length: 20 })
  issVouType: string;

  @Column("char", { name: "ISS_VOU_ST", nullable: true, length: 1 })
  issVouSt: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("date", { name: "REM_DATE", nullable: true })
  remDate: Date | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 50 })
  refNo: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("char", { name: "FOR_ISS", nullable: true, length: 1 })
  forIss: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("char", { name: "BILL_TYPE", nullable: true, length: 1 })
  billType: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("char", { name: "ISS_TYPE", nullable: true, length: 1 })
  issType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "NET_AMT", nullable: true, precision: 4, scale: 0 })
  netAmt: number | null;

  @ManyToOne(() => MasVendor, (masVendor) => masVendor.jissVous)
  @JoinColumn([{ name: "VENDORFK", referencedColumnName: "vendorpk" }])
  vendorfk: MasVendor;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jissVous)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.jissVous)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.jissVous2)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @OneToMany(() => JissVouDet1, (jissVouDet1) => jissVouDet1.issVoufk)
  jissVouDets: JissVouDet1[];
}
