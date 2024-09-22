import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PayEmpDet } from "./PayEmpDet";

@Index("PAY_EMP_DET1PK", ["payEmpDet1Pk"], { unique: true })
@Entity("PAY_EMP_DET1")
export class PayEmpDet1 {
  @Column("number", {
    primary: true,
    name: "PAY_EMP_DET1PK",
    precision: 8,
    scale: 0,
  })
  payEmpDet1Pk: number;

  @Column("number", { name: "ADD_DEDFK", precision: 8, scale: 0 })
  addDedfk: number;

  @Column("number", { name: "AMOUNT", precision: 10, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PERCENTAGE", precision: 5, scale: 2 })
  percentage: number;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => PayEmpDet, (payEmpDet) => payEmpDet.payEmpDets)
  @JoinColumn([{ name: "PAY_EMP_DETFK", referencedColumnName: "payEmpDetpk" }])
  payEmpDetfk: PayEmpDet;
}
