import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008335", ["srAmtDet1Pk"], { unique: true })
@Entity("SR_AMT_DET1")
export class SrAmtDet1 {
  @Column("number", {
    primary: true,
    name: "SR_AMT_DET1PK",
    precision: 8,
    scale: 0,
  })
  srAmtDet1Pk: number;

  @Column("number", {
    name: "SR_AMTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  srAmtfk: number | null;

  @Column("char", { name: "DC_IND", nullable: true, length: 1 })
  dcInd: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 14, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "RP_IND", nullable: true, length: 1 })
  rpInd: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
