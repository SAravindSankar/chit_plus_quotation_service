import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { MasDoc } from "./MasDoc";

@Index("ACC_ORD_REPPK", ["accOrdReppk"], { unique: true })
@Index("ORDREP1", ["delflag", "branchfk", "ordRep", "ordRepFk"], {})
@Index("ORDREP2", ["delflag", "branchfk", "repPay", "recPayFk"], {})
@Entity("ACC_ORDER_REPAIR")
export class AccOrderRepair {
  @Column("number", {
    primary: true,
    name: "ACC_ORD_REPPK",
    precision: 8,
    scale: 0,
  })
  accOrdReppk: number;

  @Column("char", { name: "ORD_REP", nullable: true, length: 1 })
  ordRep: string | null;

  @Column("number", {
    name: "ORD_REP_FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  ordRepFk: number | null;

  @Column("char", { name: "REP_PAY", nullable: true, length: 1 })
  repPay: string | null;

  @Column("number", {
    name: "REC_PAY_FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recPayFk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.accOrderRepairs)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.accOrderRepairs)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
