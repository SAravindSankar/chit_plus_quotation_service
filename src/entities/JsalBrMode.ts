import { Column, Entity, Index, OneToMany } from "typeorm";
import { JsalBrDet } from "./JsalBrDet";

@Index("JBR_MODEPK", ["brModepk"], { unique: true })
@Index("TRANBR", ["tranDocfk", "docfk", "brMode", "refAccpk"], {})
@Entity("JSAL_BR_MODE")
export class JsalBrMode {
  @Column("number", {
    primary: true,
    name: "BR_MODEPK",
    precision: 8,
    scale: 0,
  })
  brModepk: number;

  @Column("char", { name: "BR_MODE", nullable: true, length: 5 })
  brMode: string | null;

  @Column("varchar2", { name: "REF_ACC", nullable: true, length: 40 })
  refAcc: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 40 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("varchar2", { name: "PAYEE_NAME", nullable: true, length: 40 })
  payeeName: string | null;

  @Column("number", { name: "AMT", nullable: true, precision: 16, scale: 2 })
  amt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

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

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("number", {
    name: "SAL_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salDocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "RETURN_DATE", nullable: true })
  returnDate: Date | null;

  @Column("char", { name: "RET_TYPE", nullable: true, length: 5 })
  retType: string | null;

  @Column("number", {
    name: "RET_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  retAccfk: number | null;

  @Column("number", {
    name: "RETURN_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  returnNo: number | null;

  @Column("number", {
    name: "TEMPDOCFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tempdocfk: number | null;

  @OneToMany(() => JsalBrDet, (jsalBrDet) => jsalBrDet.brModefk)
  jsalBrDets: JsalBrDet[];
}
