import { Column, Entity } from "typeorm";

@Entity("REPORT_TRAN")
export class ReportTran {
  @Column("number", { name: "REPTPK", nullable: true, precision: 8, scale: 0 })
  reptpk: number | null;

  @Column("number", { name: "GRPFK", nullable: true, precision: 8, scale: 0 })
  grpfk: number | null;

  @Column("char", { name: "FORM_ID", nullable: true, length: 4 })
  formId: string | null;

  @Column("varchar2", { name: "REPORT_VIEW", nullable: true, length: 50 })
  reportView: string | null;

  @Column("varchar2", { name: "REPORT_TITLE", nullable: true, length: 40 })
  reportTitle: string | null;

  @Column("varchar2", { name: "FONT_NAME", nullable: true, length: 20 })
  fontName: string | null;

  @Column("number", {
    name: "FONT_SIZE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  fontSize: number | null;

  @Column("number", {
    name: "MARGIN_TOP",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  marginTop: number | null;

  @Column("number", {
    name: "MARGIN_LEFT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  marginLeft: number | null;

  @Column("char", { name: "ORIENTATION", nullable: true, length: 1 })
  orientation: string | null;

  @Column("char", { name: "DIS_ADD", nullable: true, length: 1 })
  disAdd: string | null;

  @Column("char", { name: "DIS_RUNDATE", nullable: true, length: 1 })
  disRundate: string | null;

  @Column("char", { name: "DIS_PGNO", nullable: true, length: 1 })
  disPgno: string | null;

  @Column("char", { name: "PAGETOT", nullable: true, length: 1 })
  pagetot: string | null;

  @Column("char", { name: "PAGEBREAK", nullable: true, length: 1 })
  pagebreak: string | null;

  @Column("number", {
    name: "ROWSPACE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  rowspace: number | null;

  @Column("number", {
    name: "COLSPACE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  colspace: number | null;

  @Column("varchar2", { name: "PARTY_FIELD", nullable: true, length: 20 })
  partyField: string | null;

  @Column("varchar2", { name: "DATE_FIELD", nullable: true, length: 20 })
  dateField: string | null;

  @Column("varchar2", { name: "PRODUCT_FIELD", nullable: true, length: 20 })
  productField: string | null;

  @Column("varchar2", { name: "BRANCHFIELD", nullable: true, length: 20 })
  branchfield: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 1 })
  delflag: string | null;

  @Column("varchar2", { name: "REPORT_NAME", nullable: true, length: 30 })
  reportName: string | null;

  @Column("char", { name: "AS_ON", nullable: true, length: 1 })
  asOn: string | null;

  @Column("varchar2", { name: "MERGE_HEAD", nullable: true, length: 150 })
  mergeHead: string | null;

  @Column("varchar2", { name: "SEC_FIELD", nullable: true, length: 20 })
  secField: string | null;

  @Column("varchar2", { name: "COMPANY_FIELD", nullable: true, length: 20 })
  companyField: string | null;

  @Column("char", { name: "EQUAL", nullable: true, length: 1 })
  equal: string | null;

  @Column("varchar2", { name: "TEXT_FIELD1", nullable: true, length: 20 })
  textField1: string | null;

  @Column("varchar2", { name: "TEXT_FIELD2", nullable: true, length: 20 })
  textField2: string | null;

  @Column("varchar2", { name: "DATE_FIELD1", nullable: true, length: 11 })
  dateField1: string | null;

  @Column("char", { name: "SUB_HEAD", nullable: true, length: 1 })
  subHead: string | null;

  @Column("char", { name: "FILTER", nullable: true, length: 1 })
  filter: string | null;

  @Column("varchar2", { name: "FOOTER", nullable: true, length: 40 })
  footer: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
