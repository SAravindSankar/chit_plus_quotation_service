import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { OldtarForms } from "./OldtarForms";
import { MasGeneral } from "./MasGeneral";
import { MasBranch } from "./MasBranch";

@Index("SYS_C008444", ["rpfootpk"], { unique: true })
@Entity("MAS_LK_RP_FOOT")
export class MasLkRpFoot {
  @Column("number", { primary: true, name: "RPFOOTPK", precision: 4, scale: 0 })
  rpfootpk: number;

  @Column("number", {
    name: "FOOTER_ORDER",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  footerOrder: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "FOOT_ST", nullable: true, length: 1 })
  footSt: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => OldtarForms, (oldtarForms) => oldtarForms.masLkRpFoots)
  @JoinColumn([{ name: "TARFORMSFK", referencedColumnName: "tarformspk" }])
  tarformsfk: OldtarForms;

  @ManyToOne(() => MasGeneral, (masGeneral) => masGeneral.masLkRpFoots)
  @JoinColumn([{ name: "MAS_GENFK", referencedColumnName: "masGenpk" }])
  masGenfk: MasGeneral;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masLkRpFoots)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;
}
