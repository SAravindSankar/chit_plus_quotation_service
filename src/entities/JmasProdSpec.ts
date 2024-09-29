import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { AltTree1 } from "./AltTree1";
import { JmasRol } from "./JmasRol";

@Index("SYS_C007706", ["prodSpecpk"], { unique: true })
@Entity("JMAS_PROD_SPEC")
export class JmasProdSpec {
  @Column("number", {
    primary: true,
    name: "PROD_SPECPK",
    precision: 6,
    scale: 0,
  })
  prodSpecpk: number;

  @Column("varchar2", {
    name: "SPEC",
    nullable: true,
    length: 50,
    default: () => "' '",
  })
  spec: string | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.jmasProdSpecs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => AltTree1, (altTree1) => altTree1.jmasProdSpecs)
  @JoinColumn([{ name: "TREE1FK", referencedColumnName: "tree1Pk" }])
  tree1Fk: AltTree1;

  @OneToMany(() => JmasRol, (jmasRol) => jmasRol.prodSpecfk)
  jmasRols: JmasRol[];
}
