import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AqInternetAgents } from "./AqInternetAgents";

@Index("UNQ_PAIRS", ["agentName", "dbUsername"], { unique: true })
@Entity("AQ$_INTERNET_AGENT_PRIVS")
export class AqInternetAgentPrivs {
  @Column("varchar2", { primary: true, name: "DB_USERNAME", length: 128 })
  dbUsername: string;

  @Column("varchar2", { primary: true, name: "AGENT_NAME", length: 512 })
  agentName: string;

  @ManyToOne(
    () => AqInternetAgents,
    (aqInternetAgents) => aqInternetAgents.aqInternetAgentPrivs,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "AGENT_NAME", referencedColumnName: "agentName" }])
  agentName2: AqInternetAgents;
}
