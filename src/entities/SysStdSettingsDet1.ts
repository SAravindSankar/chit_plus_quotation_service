import { Column, Entity } from "typeorm";

@Entity("SYS_STD_SETTINGS_DET1")
export class SysStdSettingsDet1 {
  @Column("number", {
    name: "STD_SETTINGS_DET1PK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  stdSettingsDet1Pk: number | null;

  @Column("number", {
    name: "STD_SETTINGSFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  stdSettingsfk: number | null;

  @Column("varchar2", { name: "VALUE", nullable: true, length: 20 })
  value: string | null;

  @Column("varchar2", { name: "DETAILS", nullable: true, length: 50 })
  details: string | null;

  @Column("char", { name: "SETTING_DEFAULT", nullable: true, length: 1 })
  settingDefault: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
