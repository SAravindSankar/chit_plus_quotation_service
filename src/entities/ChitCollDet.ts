import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ChitColl } from "./ChitColl";

@Index("CHIT_COLL_DETPK", ["chitCollDetpk"], { unique: true })
@Entity("CHIT_COLL_DET")
export class ChitCollDet {
  @Column("number", {
    primary: true,
    name: "CHIT_COLL_DETPK",
    precision: 8,
    scale: 0,
  })
  chitCollDetpk: number;

  @Column("number", {
    name: "INSTL_NO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  instlNo: number | null;

  @Column("date", { name: "INSTL_DATE", nullable: true })
  instlDate: Date | null;

  @Column("date", { name: "COLL_DATE", nullable: true })
  collDate: Date | null;

  @Column("number", {
    name: "INSTL_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  instlAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("char", { name: "INC_IND", nullable: true, length: 1 })
  incInd: string | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", {
    name: "CUR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  curRate: number | null;

  @Column("number", {
    name: "CURR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  currRate: number | null;

  @ManyToOne(() => ChitColl, (chitColl) => chitColl.chitCollDets)
  @JoinColumn([{ name: "CHIT_COLLFK", referencedColumnName: "chitCollpk" }])
  chitCollfk: ChitColl;
}
