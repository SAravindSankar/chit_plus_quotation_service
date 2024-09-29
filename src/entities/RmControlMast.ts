import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RmReporttypeMast } from "./RmReporttypeMast";
import { RmTemplateMast } from "./RmTemplateMast";

@Index("COMPPK_CTRL_MAST", ["rmCtrlId", "rmCtrlType"], { unique: true })
@Entity("RM_CONTROL_MAST")
export class RmControlMast {
  @Column("varchar2", { primary: true, name: "RM_CTRL_ID", length: 4 })
  rmCtrlId: string;

  @Column("varchar2", { primary: true, name: "RM_CTRL_TYPE", length: 20 })
  rmCtrlType: string;

  @Column("varchar2", { name: "RM_CTRL_NAME", nullable: true, length: 20 })
  rmCtrlName: string | null;

  @Column("varchar2", { name: "RM_CTRL_DESC", nullable: true, length: 200 })
  rmCtrlDesc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(
    () => RmReporttypeMast,
    (rmReporttypeMast) => rmReporttypeMast.rmControlMasts
  )
  @JoinColumn([{ name: "RM_REPTYPE_ID", referencedColumnName: "rmReptypeId" }])
  rmReptype: RmReporttypeMast;

  @ManyToOne(
    () => RmTemplateMast,
    (rmTemplateMast) => rmTemplateMast.rmControlMasts
  )
  @JoinColumn([{ name: "RM_TEMP_ID", referencedColumnName: "rmTempId" }])
  rmTemp: RmTemplateMast;
}
