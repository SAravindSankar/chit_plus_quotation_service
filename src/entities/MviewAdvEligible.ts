import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MviewAdvLog } from "./MviewAdvLog";

@Index("MVIEW$_ADV_ELIGIBLE_PK", ["sumobjn", "runid"], { unique: true })
@Entity("MVIEW$_ADV_ELIGIBLE")
export class MviewAdvEligible {
  @Column("number", { name: "FREQUENCY" })
  frequency: number;

  @Column("number", { name: "FLAGS" })
  flags: number;

  @Column("number", { name: "BYTECOST" })
  bytecost: number;

  @Column("number", { primary: true, name: "RUNID#" })
  runid: number;

  @Column("number", { primary: true, name: "SUMOBJN#" })
  sumobjn: number;

  @ManyToOne(() => MviewAdvLog, (mviewAdvLog) => mviewAdvLog.mviewAdvEligibles)
  @JoinColumn([{ name: "RUNID#", referencedColumnName: "runid" }])
  runid_2: MviewAdvLog;
}
