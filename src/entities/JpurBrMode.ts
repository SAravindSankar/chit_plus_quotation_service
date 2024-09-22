import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasDoc } from "./MasDoc";

@Index("PR_MODEPK", ["prModepk"], { unique: true })
@Entity("JPUR_BR_MODE")
export class JpurBrMode {
  @Column("number", {
    primary: true,
    name: "PR_MODEPK",
    precision: 6,
    scale: 0,
  })
  prModepk: number;

  @Column("number", {
    name: "PUR_DOCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purDocfk: number | null;

  @Column("char", { name: "BR_MODE", nullable: true, length: 2 })
  brMode: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 20 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "AMT", nullable: true, precision: 12, scale: 2 })
  amt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RRWOWID", nullable: true, length: 16 })
  rrwowid: Buffer | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "PURFK", nullable: true, precision: 8, scale: 0 })
  purfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jpurBrModes)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.jpurBrModes)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
