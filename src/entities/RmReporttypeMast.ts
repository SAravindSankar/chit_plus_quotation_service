import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RmControlMast } from "./RmControlMast";
import { RmTemplateMast } from "./RmTemplateMast";

@Index("PK_RMRTYPE_MAST", ["rmReptypeId"], { unique: true })
@Entity("RM_REPORTTYPE_MAST")
export class RmReporttypeMast {
  @Column("varchar2", { primary: true, name: "RM_REPTYPE_ID", length: 4 })
  rmReptypeId: string;

  @Column("varchar2", { name: "RM_REPTYPE_NAME", nullable: true, length: 50 })
  rmReptypeName: string | null;

  @Column("varchar2", { name: "RM_REPTYPE_DESC", nullable: true, length: 200 })
  rmReptypeDesc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => RmControlMast, (rmControlMast) => rmControlMast.rmReptype)
  rmControlMasts: RmControlMast[];

  @ManyToOne(
    () => RmTemplateMast,
    (rmTemplateMast) => rmTemplateMast.rmReporttypeMasts
  )
  @JoinColumn([{ name: "RM_TEMP_ID", referencedColumnName: "rmTempId" }])
  rmTemp: RmTemplateMast;
}
