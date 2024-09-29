import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BudPdCtr } from "./BudPdCtr";
import { MasBranch } from "./MasBranch";

@Index("FESTDATE", ["delflag", "festdate"], { unique: true })
@Index("FESTPK", ["festpk"], { unique: true })
@Entity("MAS_FESTIVAL")
export class MasFestival {
  @Column("number", { name: "FESTPK", precision: 6, scale: 0 })
  festpk: number;

  @Column("date", { primary: true, name: "FESTDATE" })
  festdate: Date;

  @Column("varchar2", { name: "DESCRIPTION", length: 20 })
  description: string;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", length: 10 })
  tranyear: string;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => BudPdCtr, (budPdCtr) => budPdCtr.festfk)
  budPdCtrs: BudPdCtr[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masFestivals)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;
}
