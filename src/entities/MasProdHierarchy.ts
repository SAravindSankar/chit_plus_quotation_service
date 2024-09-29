import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";

@Index("HIERARCHY_DESC", ["delflag", "companyfk", "description"], {
  unique: true,
})
@Index("HIERARCHY_LVLNO", ["delflag", "companyfk", "levelNo"], { unique: true })
@Index("PRODHPK", ["prodhpk"], { unique: true })
@Entity("MAS_PROD_HIERARCHY")
export class MasProdHierarchy {
  @Column("number", { name: "PRODHPK", precision: 4, scale: 0 })
  prodhpk: number;

  @Column("number", { name: "LEVEL_NO", unique: true, precision: 1, scale: 0 })
  levelNo: number;

  @Column("varchar2", { primary: true, name: "DESCRIPTION", length: 15 })
  description: string;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    precision: 4,
    scale: 0,
  })
  companyfk: number;

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

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "REFPRODHPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  refprodhpk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masProdHierarchies)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;
}
