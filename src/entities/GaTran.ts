import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasGenadmin } from "./MasGenadmin";
import { GaTranDet } from "./GaTranDet";

@Index("GA_TRANPK", ["gaTranpk"], { unique: true })
@Entity("GA_TRAN")
export class GaTran {
  @Column("number", {
    primary: true,
    name: "GA_TRANPK",
    precision: 8,
    scale: 0,
  })
  gaTranpk: number;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 5, scale: 0 })
  tranNo: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("varchar2", { name: "PERIODITY", nullable: true, length: 12 })
  periodity: string | null;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "GA_TRAN_ST", nullable: true, length: 1 })
  gaTranSt: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasGenadmin, (masGenadmin) => masGenadmin.gaTrans)
  @JoinColumn([{ name: "GENADMINFK", referencedColumnName: "genadminpk" }])
  genadminfk: MasGenadmin;

  @OneToMany(() => GaTranDet, (gaTranDet) => gaTranDet.gaTranfk)
  gaTranDets: GaTranDet[];
}
