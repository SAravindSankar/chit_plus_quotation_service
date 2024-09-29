import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";

@Index("EMP_LANGPK", ["empLangpk"], { unique: true })
@Entity("MAS_EMP_LANG")
export class MasEmpLang {
  @Column("number", {
    primary: true,
    name: "EMP_LANGPK",
    precision: 8,
    scale: 0,
  })
  empLangpk: number;

  @Column("varchar2", { name: "READ", nullable: true, length: 10 })
  read: string | null;

  @Column("varchar2", { name: "WRITE", nullable: true, length: 10 })
  write: string | null;

  @Column("varchar2", { name: "SPEAK", nullable: true, length: 10 })
  speak: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "EREAD", nullable: true, length: 10 })
  eread: string | null;

  @Column("varchar2", { name: "EWRITE", nullable: true, length: 10 })
  ewrite: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.masEmpLangs)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
