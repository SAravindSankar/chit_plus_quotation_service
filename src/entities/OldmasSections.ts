import { Column, Entity, Index, OneToMany } from "typeorm";
import { OldtarForms } from "./OldtarForms";

@Index("SECNAME", ["delflag", "name"], { unique: true })
@Index("SECTIONPK", ["sectionpk"], { unique: true })
@Entity("OLDMAS_SECTIONS")
export class OldmasSections {
  @Column("number", { name: "SECTIONPK", precision: 4, scale: 0 })
  sectionpk: number;

  @Column("varchar2", {
    primary: true,
    name: "NAME",
    nullable: true,
    length: 15,
  })
  name: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("char", { name: "SECTION_ID", nullable: true, length: 2 })
  sectionId: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => OldtarForms, (oldtarForms) => oldtarForms.secfk)
  oldtarForms: OldtarForms[];
}
