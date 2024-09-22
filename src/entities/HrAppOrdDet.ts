import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { HrAppOrd } from "./HrAppOrd";

@Index("APP_ORD_DETPK", ["appOrdDetpk"], { unique: true })
@Entity("HR_APP_ORD_DET")
export class HrAppOrdDet {
  @Column("number", {
    primary: true,
    name: "APP_ORD_DETPK",
    precision: 8,
    scale: 0,
  })
  appOrdDetpk: number;

  @Column("number", { name: "ALLOWDEDFK", precision: 8, scale: 0 })
  allowdedfk: number;

  @Column("number", { name: "PER", nullable: true, precision: 6, scale: 2 })
  per: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => HrAppOrd, (hrAppOrd) => hrAppOrd.hrAppOrdDets)
  @JoinColumn([{ name: "APP_ORDFK", referencedColumnName: "appOrdpk" }])
  appOrdfk: HrAppOrd;
}
