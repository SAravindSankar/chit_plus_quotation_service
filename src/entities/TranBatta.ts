import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { MasEmp } from "./MasEmp";

@Index("TRAN_BATTAPK", ["tranBattapk"], { unique: true })
@Entity("TRAN_BATTA")
export class TranBatta {
  @Column("number", {
    primary: true,
    name: "TRAN_BATTAPK",
    precision: 8,
    scale: 0,
  })
  tranBattapk: number;

  @Column("date", { name: "BATTA_DATE", nullable: true })
  battaDate: Date | null;

  @Column("number", { name: "T1", nullable: true, precision: 8, scale: 2 })
  t1: number | null;

  @Column("number", { name: "T2", nullable: true, precision: 8, scale: 2 })
  t2: number | null;

  @Column("number", { name: "T3", nullable: true, precision: 8, scale: 2 })
  t3: number | null;

  @Column("number", { name: "T4", nullable: true, precision: 8, scale: 2 })
  t4: number | null;

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

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.tranBattas)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.tranBattas)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
