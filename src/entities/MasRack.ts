import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BudPdCtr } from "./BudPdCtr";
import { BudPdCtrPend } from "./BudPdCtrPend";
import { BudPdSalper } from "./BudPdSalper";
import { BudYrCtr } from "./BudYrCtr";
import { MasBranch } from "./MasBranch";
import { MasRackEmp } from "./MasRackEmp";
import { MasRackProd } from "./MasRackProd";

@Index("RACKPK", ["rackpk"], { unique: true })
@Index("SYS_C008166", ["delflag", "branchfk", "rackId"], { unique: true })
@Entity("MAS_RACK")
export class MasRack {
  @Column("number", { primary: true, name: "RACKPK", precision: 6, scale: 0 })
  rackpk: number;

  @Column("char", { name: "RACK_ID", nullable: true, unique: true, length: 4 })
  rackId: string | null;

  @Column("varchar2", { name: "LOCATION", nullable: true, length: 20 })
  location: string | null;

  @Column("number", { name: "LENGTH", nullable: true, precision: 10, scale: 3 })
  length: number | null;

  @Column("number", {
    name: "BREADTH",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  breadth: number | null;

  @Column("number", { name: "HEIGHT", nullable: true, precision: 10, scale: 3 })
  height: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "RENT", nullable: true, precision: 7, scale: 2 })
  rent: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    unique: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

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

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("char", { name: "STOCK_CHK", nullable: true, length: 1 })
  stockChk: string | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "REFRACKPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refrackpk: number | null;

  @Column("number", {
    name: "COUNTER_ID",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  counterId: number | null;

  @OneToMany(() => BudPdCtr, (budPdCtr) => budPdCtr.ctrfk)
  budPdCtrs: BudPdCtr[];

  @OneToMany(() => BudPdCtrPend, (budPdCtrPend) => budPdCtrPend.pdCtrfk2)
  budPdCtrPends: BudPdCtrPend[];

  @OneToMany(() => BudPdSalper, (budPdSalper) => budPdSalper.pdCtrfk2)
  budPdSalpers: BudPdSalper[];

  @OneToMany(() => BudYrCtr, (budYrCtr) => budYrCtr.ctrfk)
  budYrCtrs: BudYrCtr[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masRacks)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @OneToMany(() => MasRackEmp, (masRackEmp) => masRackEmp.rackfk2)
  masRackEmps: MasRackEmp[];

  @OneToMany(() => MasRackProd, (masRackProd) => masRackProd.rackfk)
  masRackProds: MasRackProd[];
}
