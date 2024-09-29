import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";

@Entity("TRAN_BRS")
export class TranBrs {
  //DB_ERROR -> PK
  @Column("number", {
    name: "BANKRECPK",
    nullable: true,
    precision: 8,
    scale: 0,
    primary: true,
  })
  bankrecpk: number | null;

  @Column("number", {
    name: "TRAN_ACCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAccfk: number | null;

  @Column("date", { name: "BREF_DATE" })
  brefDate: Date;

  @Column("char", { name: "BREF_ST", nullable: true, length: 1 })
  brefSt: string | null;

  @Column("date", { name: "BRS_DATE" })
  brsDate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 50 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "BREF_NO", nullable: true, length: 50 })
  brefNo: string | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tranBrs)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;
}
