import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AltTree1 } from "./AltTree1";
import { JmasRol } from "./JmasRol";

@Index("SYS_C007707", ["purWtpk"], { unique: true })
@Entity("JMAS_PUR_WT")
export class JmasPurWt {
  @Column("number", { primary: true, name: "PUR_WTPK", precision: 6, scale: 0 })
  purWtpk: number;

  @Column("number", {
    name: "FROM_WT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  fromWt: number | null;

  @Column("number", {
    name: "TO_WT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  toWt: number | null;

  @Column("varchar2", {
    name: "CAPTION",
    nullable: true,
    length: 10,
    default: () => "' '",
  })
  caption: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => AltTree1, (altTree1) => altTree1.jmasPurWts)
  @JoinColumn([{ name: "TREE1FK", referencedColumnName: "tree1Pk" }])
  tree1Fk: AltTree1;

  @OneToMany(() => JmasRol, (jmasRol) => jmasRol.purWtfk)
  jmasRols: JmasRol[];
}
