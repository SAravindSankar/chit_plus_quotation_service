import { Column, Entity, Index, OneToMany } from "typeorm";
import { GaTran } from "./GaTran";

@Index("GENADMINPK", ["genadminpk"], { unique: true })
@Entity("MAS_GENADMIN")
export class MasGenadmin {
  @Column("number", {
    primary: true,
    name: "GENADMINPK",
    precision: 6,
    scale: 0,
  })
  genadminpk: number;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", {
    name: "HGENADMINFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  hgenadminfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  levelNo: number | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => GaTran, (gaTran) => gaTran.genadminfk)
  gaTrans: GaTran[];
}
