import { Column, Entity, Index } from "typeorm";

@Index("TRANSPK", ["transpk"], { unique: true })
@Entity("TRANSFERED_TABLES")
export class TransferedTables {
  @Column("number", { primary: true, name: "TRANSPK", precision: 10, scale: 0 })
  transpk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 40 })
  name: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("char", { name: "CORP_BRAN", nullable: true, length: 1 })
  corpBran: string | null;
}
