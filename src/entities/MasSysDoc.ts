import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008196", ["sysdocpk"], { unique: true })
@Entity("MAS_SYS_DOC")
export class MasSysDoc {
  @Column("number", { primary: true, name: "SYSDOCPK", precision: 4, scale: 0 })
  sysdocpk: number;

  @Column("char", { name: "CODE", nullable: true, length: 4 })
  code: string | null;

  @Column("varchar2", { name: "MODULE", nullable: true, length: 15 })
  module: string | null;

  @Column("varchar2", { name: "DOC_NAME", nullable: true, length: 30 })
  docName: string | null;

  @Column("varchar2", { name: "DOC_SHORT", nullable: true, length: 10 })
  docShort: string | null;

  @Column("char", { name: "COMP_BRAN", nullable: true, length: 1 })
  compBran: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 8 })
  shortName: string | null;
}
