import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";

@Index("POTERMSPK", ["potermspk"], { unique: true })
@Index("POTERMUNQ", ["companyfk", "term"], { unique: true })
@Entity("MAS_POTERMS")
export class MasPoterms {
  @Column("number", {
    primary: true,
    name: "POTERMSPK",
    precision: 6,
    scale: 0,
  })
  potermspk: number;

  @Column("varchar2", { name: "TERM", unique: true, length: 15 })
  term: string;

  @Column("varchar2", { name: "DETAILS", nullable: true, length: 50 })
  details: string | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masPoterms)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;
}
