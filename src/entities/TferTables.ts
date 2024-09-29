import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008385", ["tferTablepk"], { unique: true })
@Entity("TFER_TABLES")
export class TferTables {
  @Column("number", {
    primary: true,
    name: "TFER_TABLEPK",
    precision: 6,
    scale: 0,
  })
  tferTablepk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar2", { name: "TABLE_NAME", nullable: true, length: 30 })
  tableName: string | null;

  @Column("number", {
    name: "PARENTFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  parentfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
