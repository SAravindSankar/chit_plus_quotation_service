import { Column, Entity, Index } from "typeorm";

@Index("WAGE_EMPPK", ["wageEmppk"], { unique: true })
@Entity("MAS_WAGE")
export class MasWage {
  @Column("number", {
    primary: true,
    name: "WAGE_EMPPK",
    precision: 6,
    scale: 0,
  })
  wageEmppk: number;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar2", { name: "REF1NAME", nullable: true, length: 10 })
  ref1Name: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
