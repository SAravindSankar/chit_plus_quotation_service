import { Column, Entity } from "typeorm";

@Entity("MDAY_BR_MODE")
export class MdayBrMode {
  @Column("number", {
    name: "BR_MODEPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  brModepk: number | null;

  @Column("number", {
    name: "SAL_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salDocfk: number | null;

  @Column("char", { name: "BR_MODE", nullable: true, length: 5 })
  brMode: string | null;

  @Column("varchar2", { name: "REF_ACC", nullable: true, length: 30 })
  refAcc: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 40 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("varchar2", { name: "PAYEE_NAME", nullable: true, length: 40 })
  payeeName: string | null;

  @Column("number", { name: "AMT", nullable: true, precision: 8, scale: 2 })
  amt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", {
    name: "REF_ACCPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refAccpk: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("varchar2", { name: "PAYORD_NO", nullable: true, length: 8 })
  payordNo: string | null;

  @Column("date", { name: "PAYORD_DATE", nullable: true })
  payordDate: Date | null;

  @Column("number", {
    name: "OTHTRAN_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  othtranNo: number | null;

  @Column("date", { name: "OTHTRAN_DATE", nullable: true })
  othtranDate: Date | null;

  @Column("number", {
    name: "DEP_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  depAccfk: number | null;
}
