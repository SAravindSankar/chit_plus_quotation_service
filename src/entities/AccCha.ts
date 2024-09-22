import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasBranch } from "./MasBranch";

@Index("CHAPK", ["chapk"], { unique: true })
@Entity("ACC_CHA")
export class AccCha {
  @Column("number", { primary: true, name: "CHAPK", precision: 8, scale: 0 })
  chapk: number;

  @Column("number", { name: "CHA_NO", precision: 8, scale: 0 })
  chaNo: number;

  @Column("char", { name: "CHA_DATE", length: 1 })
  chaDate: string;

  @Column("number", { name: "BANK_ACCD", precision: 6, scale: 0 })
  bankAccd: number;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.accChas)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.accChas)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.accChas2)
  @JoinColumn([{ name: "FOR_BRANCHFK", referencedColumnName: "branchpk" }])
  forBranchfk: MasBranch;
}
