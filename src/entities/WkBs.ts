import { Column, Entity } from "typeorm";

@Entity("WK_BS")
export class WkBs {
  @Column("char", { name: "CODE", nullable: true, length: 4 })
  code: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 40 })
  name: string | null;

  @Column("number", { name: "DBAMT", nullable: true, precision: 14, scale: 2 })
  dbamt: number | null;

  @Column("number", { name: "CRAMT", nullable: true, precision: 14, scale: 2 })
  cramt: number | null;

  @Column("number", { name: "ISSWT", nullable: true, precision: 14, scale: 3 })
  isswt: number | null;

  @Column("number", { name: "RECWT", nullable: true, precision: 14, scale: 3 })
  recwt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "TDBAMT", nullable: true, precision: 14, scale: 2 })
  tdbamt: number | null;

  @Column("number", { name: "TCRAMT", nullable: true, precision: 14, scale: 2 })
  tcramt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
