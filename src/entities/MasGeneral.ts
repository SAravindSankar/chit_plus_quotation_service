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
import { MasLkRpFoot } from "./MasLkRpFoot";

@Index("COMPGEN", ["companyfk", "docfk"], {})
@Index("MAS_GENPK", ["masGenpk"], { unique: true })
@Entity("MAS_GENERAL")
export class MasGeneral {
  @Column("number", {
    primary: true,
    name: "MAS_GENPK",
    precision: 6,
    scale: 0,
  })
  masGenpk: number;

  @Column("char", { name: "GEN_TYPE", nullable: true, length: 1 })
  genType: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("number", { name: "GLSLFK", nullable: true, precision: 8, scale: 0 })
  glslfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("char", { name: "TYPE", nullable: true, length: 2 })
  type: string | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.recTypefk)
  jmasGsstks: JmasGsstk[];

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masGenerals)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masGenerals)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @OneToMany(() => MasLkRpFoot, (masLkRpFoot) => masLkRpFoot.masGenfk)
  masLkRpFoots: MasLkRpFoot[];
}
