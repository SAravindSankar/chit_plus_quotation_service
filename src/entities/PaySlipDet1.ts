import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008306", ["paySlipDet1Pk"], { unique: true })
@Entity("PAY_SLIP_DET1")
export class PaySlipDet1 {
  @Column("number", {
    primary: true,
    name: "PAY_SLIP_DET1PK",
    precision: 8,
    scale: 0,
  })
  paySlipDet1Pk: number;

  @Column("number", { name: "ADD_DEDFK", precision: 6, scale: 0 })
  addDedfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "PAY_SLIP_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  paySlipDetfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
