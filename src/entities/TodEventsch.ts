import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { TodEventschAmt } from "./TodEventschAmt";
import { TodEventschProd } from "./TodEventschProd";

@Index("TOD_EVENTSCHPK", ["eventschpk"], { unique: true })
@Entity("TOD_EVENTSCH")
export class TodEventsch {
  @Column("number", {
    primary: true,
    name: "EVENTSCHPK",
    precision: 8,
    scale: 0,
  })
  eventschpk: number;

  @Column("number", { name: "REF_NO", nullable: true, precision: 5, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("varchar2", { name: "SCHEMEREF", nullable: true, length: 20 })
  schemeref: string | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 6, scale: 0 })
  partyfk: number | null;

  @Column("date", { name: "PERIOD_FROM", nullable: true })
  periodFrom: Date | null;

  @Column("date", { name: "PERIOD_TO", nullable: true })
  periodTo: Date | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("char", { name: "EVENTSCH_ST", nullable: true, length: 1 })
  eventschSt: string | null;

  @Column("char", { name: "SCHEME_TYPE", nullable: true, length: 1 })
  schemeType: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.todEventsches)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @OneToMany(
    () => TodEventschAmt,
    (todEventschAmt) => todEventschAmt.eventschfk
  )
  todEventschAmts: TodEventschAmt[];

  @OneToMany(
    () => TodEventschProd,
    (todEventschProd) => todEventschProd.eventschfk
  )
  todEventschProds: TodEventschProd[];
}
