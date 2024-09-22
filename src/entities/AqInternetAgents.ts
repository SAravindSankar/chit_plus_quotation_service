import { Column, Entity, Index, OneToMany } from "typeorm";
import { AqInternetAgentPrivs } from "./AqInternetAgentPrivs";

@Index("SYS_C002346", ["agentName"], { unique: true })
@Entity("AQ$_INTERNET_AGENTS")
export class AqInternetAgents {
  @Column("varchar2", { name: "SPARE1", nullable: true, length: 128 })
  spare1: string | null;

  @Column("number", { name: "PROTOCOL", scale: 0 })
  protocol: number;

  @Column("varchar2", { primary: true, name: "AGENT_NAME", length: 512 })
  agentName: string;

  @OneToMany(
    () => AqInternetAgentPrivs,
    (aqInternetAgentPrivs) => aqInternetAgentPrivs.agentName2
  )
  aqInternetAgentPrivs: AqInternetAgentPrivs[];
}
