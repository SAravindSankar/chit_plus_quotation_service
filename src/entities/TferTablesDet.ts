import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008386", ["tferTableDetpk"], { unique: true })
@Entity("TFER_TABLES_DET")
export class TferTablesDet {
  @Column("number", {
    primary: true,
    name: "TFER_TABLE_DETPK",
    precision: 6,
    scale: 0,
  })
  tferTableDetpk: number;

  @Column("number", {
    name: "TFER_TABLEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  tferTablefk: number | null;

  @Column("varchar2", { name: "TABLE_NAME", nullable: true, length: 30 })
  tableName: string | null;

  @Column("varchar2", { name: "PK_NAME", nullable: true, length: 30 })
  pkName: string | null;

  @Column("char", { name: "GROUP_IND", nullable: true, length: 1 })
  groupInd: string | null;

  @Column("char", { name: "CORP_BRAN", nullable: true, length: 1 })
  corpBran: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
