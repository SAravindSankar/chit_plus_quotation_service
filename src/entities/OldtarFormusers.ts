import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { OldtarForms } from "./OldtarForms";
import { OldtarGroups } from "./OldtarGroups";

@Index("TARFORMUSERSPK1", ["tarformuserspk"], { unique: true })
@Entity("OLDTAR_FORMUSERS")
export class OldtarFormusers {
  @Column("number", {
    primary: true,
    name: "TARFORMUSERSPK",
    precision: 4,
    scale: 0,
  })
  tarformuserspk: number;

  @Column("char", { name: "RIGHTS", nullable: true, length: 9 })
  rights: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => OldtarForms, (oldtarForms) => oldtarForms.oldtarFormusers)
  @JoinColumn([{ name: "TARFORMSFK", referencedColumnName: "tarformspk" }])
  tarformsfk: OldtarForms;

  @ManyToOne(() => OldtarGroups, (oldtarGroups) => oldtarGroups.oldtarFormusers)
  @JoinColumn([{ name: "TARGROUPFK", referencedColumnName: "targrouppk" }])
  targroupfk: OldtarGroups;
}
