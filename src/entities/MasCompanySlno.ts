import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { MasDoc } from "./MasDoc";

@Index("COMPANY_SLNOPK", ["companySlnopk"], { unique: true })
@Entity("MAS_COMPANY_SLNO")
export class MasCompanySlno {
  @Column("number", {
    primary: true,
    name: "COMPANY_SLNOPK",
    precision: 8,
    scale: 0,
  })
  companySlnopk: number;

  @Column("number", { name: "SLNO", precision: 6, scale: 0 })
  slno: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("date", { name: "DATE_FREEZED", nullable: true })
  dateFreezed: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masCompanySlnos)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.masCompanySlnos)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
