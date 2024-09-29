import { Column, Entity } from "typeorm";

@Entity("MAS_CUST_DB")
export class MasCustDb {
  @Column("number", { name: "CUSTPK", precision: 8, scale: 0 })
  custpk: number;

  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("varchar2", { name: "SIGNET_NO", nullable: true, length: 40 })
  signetNo: string | null;

  @Column("varchar2", { name: "ADDRESS", length: 100 })
  address: string;

  @Column("varchar2", { name: "CITY", length: 20 })
  city: string;

  @Column("varchar2", { name: "STATE", length: 20 })
  state: string;

  @Column("char", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("char", { name: "CTYPE", length: 1 })
  ctype: string;

  @Column("varchar2", { name: "RELIGION", nullable: true, length: 10 })
  religion: string | null;

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

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

  @Column("number", { name: "DUPPK", nullable: true, precision: 6, scale: 0 })
  duppk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", {
    name: "SALUTATION",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salutation: number | null;

  @Column("number", {
    name: "PROFESSION",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  profession: number | null;

  @Column("number", {
    name: "CATEGORY",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  category: number | null;

  @Column("number", {
    name: "SALUTATIONFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salutationfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "TITTLE", nullable: true, length: 10 })
  tittle: string | null;
}
