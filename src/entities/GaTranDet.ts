import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { GaTran } from "./GaTran";

@Index("GA_TRAN_DETPK", ["gaTranDetpk"], { unique: true })
@Entity("GA_TRAN_DET")
export class GaTranDet {
  @Column("number", {
    primary: true,
    name: "GA_TRAN_DETPK",
    precision: 8,
    scale: 0,
  })
  gaTranDetpk: number;

  @Column("date", { name: "ACTUAL_DT", nullable: true })
  actualDt: Date | null;

  @Column("date", { name: "REM_DATE", nullable: true })
  remDate: Date | null;

  @Column("date", { name: "COMP_DATE", nullable: true })
  compDate: Date | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

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

  @ManyToOne(() => GaTran, (gaTran) => gaTran.gaTranDets)
  @JoinColumn([{ name: "GA_TRANFK", referencedColumnName: "gaTranpk" }])
  gaTranfk: GaTran;
}
