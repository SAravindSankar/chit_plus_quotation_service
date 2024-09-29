import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";

@Index("LABCHRGPK", ["labchrgpk"], { unique: true })
@Index("LABDESC", ["delflag", "companyfk", "description"], { unique: true })
@Entity("MAS_LABCHRG")
export class MasLabchrg {
  @Column("number", {
    primary: true,
    name: "LABCHRGPK",
    precision: 4,
    scale: 0,
  })
  labchrgpk: number;

  @Column("varchar2", { name: "DESCRIPTION", unique: true, length: 20 })
  description: string;

  @Column("number", { name: "COMPANYFK", unique: true, precision: 4, scale: 0 })
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

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "RATE", nullable: true, precision: 12, scale: 2 })
  rate: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masLabchrgs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;
}
