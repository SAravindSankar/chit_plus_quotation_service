import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007882", ["branchDet1Pk"], { unique: true })
@Entity("MAS_BRANCH_DET1")
export class MasBranchDet1 {
  @Column("number", {
    primary: true,
    name: "BRANCH_DET1PK",
    precision: 4,
    scale: 0,
  })
  branchDet1Pk: number;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  addRatePer: number | null;

  @Column("varchar2", { name: "BRANCHSIGN", nullable: true, length: 30 })
  branchsign: string | null;

  @Column("varchar2", { name: "REPHEAD", nullable: true, length: 10 })
  rephead: string | null;

  @Column("char", { name: "OEFLG", nullable: true, length: 1 })
  oeflg: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "DC_TYPE", nullable: true, length: 4 })
  dcType: string | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 8, scale: 0 })
  taxfk: number | null;

  @Column("char", { name: "DCD_TYPE", nullable: true, length: 1 })
  dcdType: string | null;

  @Column("number", {
    name: "LAST_TAGNO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  lastTagno: number | null;

  @Column("char", { name: "DW_TYPE", nullable: true, length: 1 })
  dwType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
