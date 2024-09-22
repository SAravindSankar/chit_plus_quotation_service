import { Column, Entity } from "typeorm";

@Entity("TAR_FORMS")
export class TarForms {
  @Column("number", {
    name: "TARFORMSPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tarformspk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 35 })
  name: string | null;

  @Column("char", { name: "FORM_ID", nullable: true, length: 4 })
  formId: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("char", { name: "REQDRIGHTS", nullable: true, length: 10 })
  reqdrights: string | null;

  @Column("number", {
    name: "TARGROUPFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  targroupfk: number | null;

  @Column("number", { name: "SECFK", nullable: true, precision: 8, scale: 0 })
  secfk: number | null;

  @Column("char", { name: "FORM_ACCIND", nullable: true, length: 1 })
  formAccind: string | null;

  @Column("number", {
    name: "HTARFORMSFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  htarformsfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  levelNo: number | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "OLDFORM_ID", nullable: true, length: 4 })
  oldformId: string | null;

  @Column("number", {
    name: "HTREE1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  htree1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "FORM_NAME", nullable: true, length: 35 })
  formName: string | null;
}
