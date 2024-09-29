import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007959", ["vendorpk"], { unique: true })
@Entity("MAS_DEALER")
export class MasDealer {
  @Column("number", { primary: true, name: "VENDORPK", precision: 6, scale: 0 })
  vendorpk: number;

  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("char", { name: "CODE", nullable: true, length: 4 })
  code: string | null;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 20 })
  state: string | null;

  @Column("char", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("char", { name: "VTYPE", nullable: true, length: 1 })
  vtype: string | null;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("varchar2", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 25 })
  email: string | null;

  @Column("varchar2", { name: "URL", nullable: true, length: 25 })
  url: string | null;

  @Column("varchar2", { name: "CPERSON", nullable: true, length: 25 })
  cperson: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

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

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", { name: "OP_AMT", nullable: true, precision: 15, scale: 2 })
  opAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
