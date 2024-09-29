import { Column, Entity } from "typeorm";

@Entity("SYS_STD_SETTINGS")
export class SysStdSettings {
  @Column("number", {
    name: "STD_SETTINGSPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  stdSettingspk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("varchar2", { name: "SETTING_KEY", nullable: true, length: 20 })
  settingKey: string | null;

  @Column("char", { name: "TYPE", nullable: true, length: 1 })
  type: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
