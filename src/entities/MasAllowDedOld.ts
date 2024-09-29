import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007852", ["allowDedpk"], { unique: true })
@Entity("MAS_ALLOW_DED_OLD")
export class MasAllowDedOld {
  @Column("number", {
    primary: true,
    name: "ALLOW_DEDPK",
    precision: 4,
    scale: 0,
  })
  allowDedpk: number;

  @Column("char", { name: "ADD_DED", length: 1 })
  addDed: string;

  @Column("varchar2", { name: "NAME", length: 30 })
  name: string;

  @Column("char", { name: "PERIOD", length: 1 })
  period: string;

  @Column("char", { name: "LOP_APPLICABLE", length: 1 })
  lopApplicable: string;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
