import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasGsstk } from "./JmasGsstk";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";
import { MasDoc } from "./MasDoc";

@Index("SALESTYPEPK", ["salestypepk"], { unique: true })
@Entity("MAS_SALESTYPE")
export class MasSalestype {
  @Column("number", {
    primary: true,
    name: "SALESTYPEPK",
    precision: 6,
    scale: 0,
  })
  salestypepk: number;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "BILL_DESC", nullable: true, length: 25 })
  billDesc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.issTypefk)
  jmasGsstks: JmasGsstk[];

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masSalestypes)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masSalestypes)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.masSalestypes)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
