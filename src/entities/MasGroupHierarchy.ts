import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";

@Entity("MAS_GROUP_HIERARCHY")
export class MasGroupHierarchy {
  //DB_ERROR -> PK
  @Column("number", {
    name: "PRODHPK",
    nullable: true,
    precision: 4,
    scale: 0,
    primary: true,
  })
  prodhpk: number | null;

  @Column("number", { name: "LEVEL_NO", precision: 1, scale: 0 })
  levelNo: number;

  @Column("varchar2", { name: "DESCRIPTION", length: 15 })
  description: string;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masGroupHierarchies)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;
}
