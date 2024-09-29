import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasFestival } from "./JmasFestival";

@Index("FESTIVAL_DETPK", ["festivalDetpk"], { unique: true })
@Entity("JMAS_FESTIVAL_DET")
export class JmasFestivalDet {
  @Column("number", {
    primary: true,
    name: "FESTIVAL_DETPK",
    precision: 8,
    scale: 0,
  })
  festivalDetpk: number;

  @Column("date", { name: "FEST_DATE", nullable: true })
  festDate: Date | null;

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

  @ManyToOne(
    () => JmasFestival,
    (jmasFestival) => jmasFestival.jmasFestivalDets
  )
  @JoinColumn([{ name: "FESTIVALFK", referencedColumnName: "festpk" }])
  festivalfk: JmasFestival;
}
