import { Column, Entity } from "typeorm";

@Entity("TEMP_TAR_FORMS")
export class TempTarForms {
  @Column("varchar2", { name: "NAME", nullable: true, length: 35 })
  name: string | null;

  @Column("char", { name: "FORM_ID", nullable: true, length: 4 })
  formId: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("char", { name: "REQDRIGHTS", nullable: true, length: 8 })
  reqdrights: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TARFORMSPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tarformspk: number | null;

  @Column("number", { name: "SECFK", nullable: true, precision: 8, scale: 0 })
  secfk: number | null;

  @Column("char", { name: "FORM_ACCIND", nullable: true, length: 1 })
  formAccind: string | null;

  @Column("char", { name: "OLD_FORMID", nullable: true, length: 4 })
  oldFormid: string | null;

  @Column("char", { name: "NEW_FORMID", nullable: true, length: 4 })
  newFormid: string | null;

  @Column("char", { name: "OLD_FORM_ID", nullable: true, length: 4 })
  oldFormId: string | null;

  @Column("number", {
    name: "SYSTARGROUPFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  systargroupfk: number | null;

  @Column("char", { name: "TAR_FORMACCIND", nullable: true, length: 1 })
  tarFormaccind: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
