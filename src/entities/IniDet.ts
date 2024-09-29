import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasIni } from "./MasIni";

@Index("INI_DETPK", ["iniDetpk"], { unique: true })
@Entity("INI_DET")
export class IniDet {
  @Column("number", {
    primary: true,
    name: "INI_DETPK",
    precision: 8,
    scale: 0,
  })
  iniDetpk: number;

  @Column("varchar2", { name: "INI_VALUE", length: 20 })
  iniValue: string;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 50 })
  description: string | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @ManyToOne(() => MasIni, (masIni) => masIni.iniDets)
  @JoinColumn([{ name: "INIFK", referencedColumnName: "inipk" }])
  inifk: MasIni;
}
