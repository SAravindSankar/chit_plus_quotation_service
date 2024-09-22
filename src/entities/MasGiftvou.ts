import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";

@Index("GIFTVOUPK", ["giftvoupk"], { unique: true })
@Index("GV_NAME", ["delflag", "companyfk", "name"], { unique: true })
@Entity("MAS_GIFTVOU")
export class MasGiftvou {
  @Column("number", {
    primary: true,
    name: "GIFTVOUPK",
    precision: 4,
    scale: 0,
  })
  giftvoupk: number;

  @Column("varchar2", { name: "NAME", unique: true, length: 20 })
  name: string;

  @Column("varchar2", { name: "DETAILS", length: 50 })
  details: string;

  @Column("number", { name: "COMPANYFK", unique: true, precision: 4, scale: 0 })
  companyfk: number;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masGiftvous)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masGiftvous)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;
}
