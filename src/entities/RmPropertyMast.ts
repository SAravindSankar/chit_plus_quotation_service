import { Column, Entity, Index } from "typeorm";

@Index("COMPPK_PROP_MAST", ["rmPropertyId", "rmCtrlType"], { unique: true })
@Entity("RM_PROPERTY_MAST")
export class RmPropertyMast {
  @Column("varchar2", { primary: true, name: "RM_PROPERTY_ID", length: 4 })
  rmPropertyId: string;

  @Column("varchar2", { primary: true, name: "RM_CTRL_TYPE", length: 20 })
  rmCtrlType: string;

  @Column("varchar2", { name: "RM_PROPERTY_NAME", nullable: true, length: 20 })
  rmPropertyName: string | null;

  @Column("varchar2", { name: "RM_PROPERTY_VALUE", nullable: true, length: 30 })
  rmPropertyValue: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
