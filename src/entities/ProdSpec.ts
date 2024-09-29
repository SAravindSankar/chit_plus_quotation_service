import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";

@Index("SYS_C009993", ["prodspecpk"], { unique: true })
@Entity("PROD_SPEC")
export class ProdSpec {
  @Column("number", {
    primary: true,
    name: "PRODSPECPK",
    precision: 8,
    scale: 0,
  })
  prodspecpk: number;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "VALUE", nullable: true, length: 20 })
  value: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.prodSpecs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;
}
