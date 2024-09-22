import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008384", ["tferpk"], { unique: true })
@Entity("TFER_LOG")
export class TferLog {
  @Column("number", { primary: true, name: "TFERPK", precision: 8, scale: 0 })
  tferpk: number;

  @Column("number", { name: "TFER_NO", nullable: true, precision: 6, scale: 0 })
  tferNo: number | null;

  @Column("date", { name: "TFER_DATE", nullable: true })
  tferDate: Date | null;

  @Column("char", { name: "CORP_BRAN", nullable: true, length: 1 })
  corpBran: string | null;

  @Column("number", {
    name: "TFER_BYFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  tferByfk: number | null;

  @Column("number", {
    name: "TFER_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tferBranchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "TFER_FROM_DATE", nullable: true })
  tferFromDate: Date | null;
}
