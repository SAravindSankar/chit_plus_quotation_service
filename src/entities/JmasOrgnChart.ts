import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";

@Index("ORGN_CHARTPK", ["orgnChartpk"], { unique: true })
@Entity("JMAS_ORGN_CHART")
export class JmasOrgnChart {
  @Column("number", {
    primary: true,
    name: "ORGN_CHARTPK",
    precision: 8,
    scale: 0,
  })
  orgnChartpk: number;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

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

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jmasOrgnCharts)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jmasOrgnCharts2)
  @JoinColumn([{ name: "HEMPFK", referencedColumnName: "emppk" }])
  hempfk: MasEmp;
}
