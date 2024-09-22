import { Column, Entity } from "typeorm";

@Entity("RM_CONTROL_DEFN")
export class RmControlDefn {
  @Column("varchar2", { name: "RM_TEMP_ID", nullable: true, length: 4 })
  rmTempId: string | null;

  @Column("varchar2", { name: "RM_REPTYPE_ID", nullable: true, length: 4 })
  rmReptypeId: string | null;

  @Column("varchar2", { name: "RM_CTRL_ID", nullable: true, length: 4 })
  rmCtrlId: string | null;

  @Column("varchar2", { name: "RM_CTRL_TYPE", nullable: true, length: 20 })
  rmCtrlType: string | null;

  @Column("varchar2", { name: "RM_PROPERTY_ID", nullable: true, length: 4 })
  rmPropertyId: string | null;

  @Column("varchar2", { name: "RM_PROPERTY_VALUE", nullable: true, length: 30 })
  rmPropertyValue: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
