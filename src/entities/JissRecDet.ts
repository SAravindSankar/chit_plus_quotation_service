import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasProduct } from "./JmasProduct";
import { JissRecDet1 } from "./JissRecDet1";

@Index("JISS_REC_DETPK", ["issRecDetpk"], { unique: true })
@Entity("JISS_REC_DET")
export class JissRecDet {
  @Column("number", {
    primary: true,
    name: "ISS_REC_DETPK",
    precision: 8,
    scale: 0,
  })
  issRecDetpk: number;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "ISS_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVoufk: number | null;

  @Column("number", {
    name: "AWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  awt: number | null;

  @Column("number", {
    name: "NWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  nwt: number | null;

  @Column("number", {
    name: "WWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  wwt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jissRecDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @OneToMany(() => JissRecDet1, (jissRecDet1) => jissRecDet1.issRecDetfk)
  jissRecDets: JissRecDet1[];
}
