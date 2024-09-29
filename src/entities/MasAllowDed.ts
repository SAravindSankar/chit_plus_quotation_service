import { Column, Entity, Index, OneToMany } from "typeorm";
import { PaySalhisDet } from "./PaySalhisDet";
import { PaySlipDet } from "./PaySlipDet";

@Index("ALLOW_DEDPK", ["allowDedpk"], { unique: true })
@Entity("MAS_ALLOW_DED")
export class MasAllowDed {
  @Column("number", {
    primary: true,
    name: "ALLOW_DEDPK",
    precision: 8,
    scale: 0,
  })
  allowDedpk: number;

  @Column("char", { name: "ADD_DED", nullable: true, length: 1 })
  addDed: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("char", { name: "PERIOD", nullable: true, length: 1 })
  period: string | null;

  @Column("char", { name: "LOP_APPLICABLE", nullable: true, length: 1 })
  lopApplicable: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "PERCENTAGE",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  percentage: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => PaySalhisDet, (paySalhisDet) => paySalhisDet.allDedfk)
  paySalhisDets: PaySalhisDet[];

  @OneToMany(() => PaySlipDet, (paySlipDet) => paySlipDet.allDedfk)
  paySlipDets: PaySlipDet[];
}
