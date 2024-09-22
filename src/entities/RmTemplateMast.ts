import { Column, Entity, Index, OneToMany } from "typeorm";
import { RmControlMast } from "./RmControlMast";
import { RmReporttypeMast } from "./RmReporttypeMast";

@Index("PK_RMTEMP_MAST", ["rmTempId"], { unique: true })
@Entity("RM_TEMPLATE_MAST")
export class RmTemplateMast {
  @Column("varchar2", { primary: true, name: "RM_TEMP_ID", length: 4 })
  rmTempId: string;

  @Column("varchar2", { name: "RM_TEMP_NAME", nullable: true, length: 50 })
  rmTempName: string | null;

  @Column("varchar2", { name: "RM_TEMP_DESC", nullable: true, length: 200 })
  rmTempDesc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => RmControlMast, (rmControlMast) => rmControlMast.rmTemp)
  rmControlMasts: RmControlMast[];

  @OneToMany(
    () => RmReporttypeMast,
    (rmReporttypeMast) => rmReporttypeMast.rmTemp
  )
  rmReporttypeMasts: RmReporttypeMast[];
}
