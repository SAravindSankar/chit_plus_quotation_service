import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { JmasGsstk } from "./JmasGsstk";

@Index("OBGSGS", ["branchfk", "gsstkfk"], {})
@Index("SYS_C008230", ["obGsstkpk"], { unique: true })
@Entity("OB_GSSTK")
export class ObGsstk {
  @Column("number", {
    primary: true,
    name: "OB_GSSTKPK",
    precision: 6,
    scale: 0,
  })
  obGsstkpk: number;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "OPSTK_WT",
    nullable: true,
    precision: 10,
    scale: 3,
    default: () => "0",
  })
  opstkWt: number | null;

  @Column("number", {
    name: "OPSTK_PCS",
    nullable: true,
    precision: 7,
    scale: 1,
    default: () => "0",
  })
  opstkPcs: number | null;

  @Column("number", {
    name: "OPSTK_VAL",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  opstkVal: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("char", { name: "UOM_IND", nullable: true, length: 1 })
  uomInd: string | null;

  @Column("number", {
    name: "OPSTK_NWT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkNwt: number | null;

  @Column("number", {
    name: "OPSTK_VAL_NWT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  opstkValNwt: number | null;

  @Column("number", {
    name: "OPSTK_CARAT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkCarat: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.obGsstks)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => JmasGsstk, (jmasGsstk) => jmasGsstk.obGsstks)
  @JoinColumn([{ name: "GSSTKFK", referencedColumnName: "gsstkpk" }])
  gsstkfk2: JmasGsstk;
}
