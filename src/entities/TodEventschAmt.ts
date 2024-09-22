import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TodEventsch } from "./TodEventsch";

@Entity("TOD_EVENTSCH_AMT")
export class TodEventschAmt {
  //DB_ERROR -> PK
  @Column("number", {
    name: "EVENTSCH_AMTPK",
    nullable: true,
    precision: 8,
    scale: 0,
    primary: true,
  })
  eventschAmtpk: number | null;

  @Column("number", {
    name: "EVENTSCH_PRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  eventschProdfk: number | null;

  @Column("varchar2", { name: "RANGE", nullable: true, length: 20 })
  range: string | null;

  @Column("number", {
    name: "FROM_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  fromAmt: number | null;

  @Column("number", { name: "TO_AMT", nullable: true, precision: 8, scale: 2 })
  toAmt: number | null;

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

  @ManyToOne(() => TodEventsch, (todEventsch) => todEventsch.todEventschAmts)
  @JoinColumn([{ name: "EVENTSCHFK", referencedColumnName: "eventschpk" }])
  eventschfk: TodEventsch;
}
