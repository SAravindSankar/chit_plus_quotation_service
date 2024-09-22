import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { MasDoc } from "./MasDoc";

@Index("BRAN_SLNOPK", ["branSlnopk"], { unique: true })
@Index("DOCINDEX", ["docfk", "branchfk"], {})
@Entity("MAS_BRANCH_SLNO")
export class MasBranchSlno {
  @Column("number", {
    primary: true,
    name: "BRAN_SLNOPK",
    precision: 4,
    scale: 0,
  })
  branSlnopk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "DOC_SLNO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  docSlno: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("date", { name: "DATE_FREEZED", nullable: true })
  dateFreezed: Date | null;

  @Column("varchar2", { name: "PRE_FIX", nullable: true, length: 5 })
  preFix: string | null;

  @Column("varchar2", { name: "SUF_FIX", nullable: true, length: 5 })
  sufFix: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masBranchSlnos)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.masBranchSlnos)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk2: MasDoc;
}
