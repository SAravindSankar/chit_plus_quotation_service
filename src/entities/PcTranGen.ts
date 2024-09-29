import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008311", ["pcTranGenpk"], { unique: true })
@Entity("PC_TRAN_GEN")
export class PcTranGen {
  @Column("number", {
    primary: true,
    name: "PC_TRAN_GENPK",
    precision: 4,
    scale: 0,
  })
  pcTranGenpk: number;

  @Column("char", { name: "TRAN_ID", nullable: true, length: 2 })
  tranId: string | null;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

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
