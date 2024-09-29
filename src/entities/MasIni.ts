import { Column, Entity, Index, OneToMany } from "typeorm";
import { IniDet } from "./IniDet";

@Index("INIPK", ["inipk"], { unique: true })
@Entity("MAS_INI")
export class MasIni {
  @Column("number", { primary: true, name: "INIPK", precision: 8, scale: 0 })
  inipk: number;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "INI_NAME", length: 40 })
  iniName: string;

  @Column("char", { name: "INI_ST", nullable: true, length: 1 })
  iniSt: string | null;

  @Column("char", { name: "UTL_TYPE", nullable: true, length: 1 })
  utlType: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @OneToMany(() => IniDet, (iniDet) => iniDet.inifk)
  iniDets: IniDet[];
}
