import { Column, Entity } from "typeorm";

@Entity("PAY_EMP_DET12")
export class PayEmpDet12 {
  @Column("number", {
    name: "PAY_EMP_DET12PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  payEmpDet12Pk: number | null;

  @Column("number", { name: "PAY_EMP_DET1FK", precision: 8, scale: 0 })
  payEmpDet1Fk: number;

  @Column("number", {
    name: "SAL_PERIODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salPeriodfk: number | null;

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
}
