import { Column, Entity, Index, OneToMany } from "typeorm";
import { TgrDbn } from "./TgrDbn";
import { TgrGrn } from "./TgrGrn";

@Index("TRAN_ADD1PK", ["tranAddpk"], { unique: true })
@Entity("TRAN_ADD")
export class TranAdd {
  @Column("number", {
    primary: true,
    name: "TRAN_ADDPK",
    precision: 8,
    scale: 0,
  })
  tranAddpk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("char", { name: "TRAN_ST", nullable: true, length: 1 })
  tranSt: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 40 })
  name: string | null;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 120 })
  address: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 20 })
  state: string | null;

  @Column("char", { name: "PIN", nullable: true, length: 6 })
  pin: string | null;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar2", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 25 })
  email: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("char", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "DOC_DATE", nullable: true })
  docDate: Date | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 10, scale: 0 })
  docNo: number | null;

  @Column("varchar2", { name: "SIGNET_NO", nullable: true, length: 20 })
  signetNo: string | null;

  @OneToMany(() => TgrDbn, (tgrDbn) => tgrDbn.tranAddfk)
  tgrDbns: TgrDbn[];

  @OneToMany(() => TgrGrn, (tgrGrn) => tgrGrn.tranAddfk)
  tgrGrns: TgrGrn[];
}
