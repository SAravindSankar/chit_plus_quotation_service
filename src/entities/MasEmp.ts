import { Column, Entity, Index, OneToMany } from "typeorm";
import { BudPdSalper } from "./BudPdSalper";
import { BudYrSalper } from "./BudYrSalper";
import { JmasOrgnChart } from "./JmasOrgnChart";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JsalDelivery } from "./JsalDelivery";
import { JsalOrder } from "./JsalOrder";
import { JsalQuo } from "./JsalQuo";
import { MasEmpExp } from "./MasEmpExp";
import { MasEmpLang } from "./MasEmpLang";
import { MasEmpQua } from "./MasEmpQua";
import { MasRackEmp } from "./MasRackEmp";
import { PayAttendence } from "./PayAttendence";
import { PayEmpDet } from "./PayEmpDet";
import { PayLeave } from "./PayLeave";
import { PayLeaveEncash } from "./PayLeaveEncash";
import { PayLoanTran } from "./PayLoanTran";
import { PaySalhis } from "./PaySalhis";
import { PaySlip } from "./PaySlip";
import { TranBatta } from "./TranBatta";

@Index("EMPPK", ["emppk"], { unique: true })
@Entity("MAS_EMP")
export class MasEmp {
  @Column("number", { primary: true, name: "EMPPK", precision: 8, scale: 0 })
  emppk: number;

  @Column("char", { name: "CODE", length: 4 })
  code: string;

  @Column("varchar2", { name: "NAME", length: 30 })
  name: string;

  @Column("varchar2", { name: "LAST_NAME", nullable: true, length: 30 })
  lastName: string | null;

  @Column("varchar2", { name: "FATHER_NAME", nullable: true, length: 30 })
  fatherName: string | null;

  @Column("char", { name: "SEX", length: 1 })
  sex: string;

  @Column("date", { name: "DOB", nullable: true })
  dob: Date | null;

  @Column("varchar2", { name: "NATIONALITY", nullable: true, length: 10 })
  nationality: string | null;

  @Column("varchar2", { name: "PADDRESS", nullable: true, length: 100 })
  paddress: string | null;

  @Column("varchar2", { name: "PCITY", nullable: true, length: 20 })
  pcity: string | null;

  @Column("varchar2", { name: "PSTATE", nullable: true, length: 20 })
  pstate: string | null;

  @Column("char", { name: "PPIN", nullable: true, length: 6 })
  ppin: string | null;

  @Column("varchar2", { name: "TADDRESS", nullable: true, length: 100 })
  taddress: string | null;

  @Column("varchar2", { name: "TCITY", nullable: true, length: 20 })
  tcity: string | null;

  @Column("varchar2", { name: "TSTATE", nullable: true, length: 20 })
  tstate: string | null;

  @Column("char", { name: "TPIN", nullable: true, length: 6 })
  tpin: string | null;

  @Column("number", { name: "HEIGHT", nullable: true, precision: 3, scale: 0 })
  height: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 6, scale: 3 })
  weight: number | null;

  @Column("char", { name: "BLOOD_GROUP", nullable: true, length: 5 })
  bloodGroup: string | null;

  @Column("varchar2", { name: "PHYSIQUE", nullable: true, length: 20 })
  physique: string | null;

  @Column("varchar2", { name: "MARTIAL_STATUS", nullable: true, length: 20 })
  martialStatus: string | null;

  @Column("number", {
    name: "NO_OF_DEPENDENTS",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  noOfDependents: number | null;

  @Column("varchar2", { name: "REF1NAME", nullable: true, length: 40 })
  ref1Name: string | null;

  @Column("varchar2", { name: "REF1ADD", nullable: true, length: 100 })
  ref1Add: string | null;

  @Column("varchar2", { name: "REF2NAME", nullable: true, length: 40 })
  ref2Name: string | null;

  @Column("varchar2", { name: "REF2ADD", nullable: true, length: 100 })
  ref2Add: string | null;

  @Column("number", { name: "SL_NO", nullable: true, precision: 6, scale: 0 })
  slNo: number | null;

  @Column("number", { name: "DESIGFK", nullable: true, precision: 8, scale: 0 })
  desigfk: number | null;

  @Column("date", { name: "DOJ", nullable: true })
  doj: Date | null;

  @Column("date", { name: "DOC", nullable: true })
  doc: Date | null;

  @Column("date", { name: "DOL", nullable: true })
  dol: Date | null;

  @Column("varchar2", { name: "BANK_ACCNO", nullable: true, length: 15 })
  bankAccno: string | null;

  @Column("varchar2", { name: "BANK_NAME", nullable: true, length: 25 })
  bankName: string | null;

  @Column("varchar2", { name: "BANK_BRANCH", nullable: true, length: 25 })
  bankBranch: string | null;

  @Column("varchar2", { name: "CCARDNO", nullable: true, length: 15 })
  ccardno: string | null;

  @Column("varchar2", { name: "CCBANK", nullable: true, length: 25 })
  ccbank: string | null;

  @Column("varchar2", { name: "PAN_NO", nullable: true, length: 20 })
  panNo: string | null;

  @Column("varchar2", { name: "PF_ACC_NO", nullable: true, length: 15 })
  pfAccNo: string | null;

  @Column("date", { name: "PF_DATE", nullable: true })
  pfDate: Date | null;

  @Column("varchar2", { name: "ESI_ACC_NO", nullable: true, length: 15 })
  esiAccNo: string | null;

  @Column("date", { name: "ESI_DATE", nullable: true })
  esiDate: Date | null;

  @Column("varchar2", { name: "PASSPORTNO", nullable: true, length: 20 })
  passportno: string | null;

  @Column("date", { name: "VALID_TILL", nullable: true })
  validTill: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("number", { name: "DEPTFK", nullable: true, precision: 8, scale: 0 })
  deptfk: number | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 30 })
  email: string | null;

  @Column("number", {
    name: "LEAVE_AVAILABLE",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  leaveAvailable: number | null;

  @Column("char", { name: "EMP_TYPE", nullable: true, length: 1 })
  empType: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 8 })
  shortName: string | null;

  @Column("number", {
    name: "CATEGORYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  categoryfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @OneToMany(() => BudPdSalper, (budPdSalper) => budPdSalper.empfk)
  budPdSalpers: BudPdSalper[];

  @OneToMany(() => BudYrSalper, (budYrSalper) => budYrSalper.empfk)
  budYrSalpers: BudYrSalper[];

  @OneToMany(() => JmasOrgnChart, (jmasOrgnChart) => jmasOrgnChart.empfk)
  jmasOrgnCharts: JmasOrgnChart[];

  @OneToMany(() => JmasOrgnChart, (jmasOrgnChart) => jmasOrgnChart.hempfk)
  jmasOrgnCharts2: JmasOrgnChart[];

  @OneToMany(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.salMan2)
  jsalBillDets: JsalBillDet1[];

  @OneToMany(() => JsalDelivery, (jsalDelivery) => jsalDelivery.empfk)
  jsalDeliveries: JsalDelivery[];

  @OneToMany(() => JsalOrder, (jsalOrder) => jsalOrder.salesMan)
  jsalOrders: JsalOrder[];

  @OneToMany(() => JsalQuo, (jsalQuo) => jsalQuo.empfk)
  jsalQuos: JsalQuo[];

  @OneToMany(() => MasEmpExp, (masEmpExp) => masEmpExp.empfk)
  masEmpExps: MasEmpExp[];

  @OneToMany(() => MasEmpLang, (masEmpLang) => masEmpLang.empfk)
  masEmpLangs: MasEmpLang[];

  @OneToMany(() => MasEmpQua, (masEmpQua) => masEmpQua.empfk)
  masEmpQuas: MasEmpQua[];

  @OneToMany(() => MasRackEmp, (masRackEmp) => masRackEmp.empfk2)
  masRackEmps: MasRackEmp[];

  @OneToMany(() => PayAttendence, (payAttendence) => payAttendence.empfk)
  payAttendences: PayAttendence[];

  @OneToMany(() => PayEmpDet, (payEmpDet) => payEmpDet.empfk)
  payEmpDets: PayEmpDet[];

  @OneToMany(() => PayLeave, (payLeave) => payLeave.empfk)
  payLeaves: PayLeave[];

  @OneToMany(() => PayLeaveEncash, (payLeaveEncash) => payLeaveEncash.empfk)
  payLeaveEncashes: PayLeaveEncash[];

  @OneToMany(() => PayLoanTran, (payLoanTran) => payLoanTran.empfk)
  payLoanTrans: PayLoanTran[];

  @OneToMany(() => PaySalhis, (paySalhis) => paySalhis.empfk)
  paySalhis: PaySalhis[];

  @OneToMany(() => PaySlip, (paySlip) => paySlip.empfk)
  paySlips: PaySlip[];

  @OneToMany(() => TranBatta, (tranBatta) => tranBatta.empfk)
  tranBattas: TranBatta[];
}
