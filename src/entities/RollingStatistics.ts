import { Column, Entity } from "typeorm";

@Entity("ROLLING$STATISTICS")
export class RollingStatistics {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("timestamp", { name: "UPDATE_TIME", nullable: true, scale: 6 })
  updateTime: Date | null;

  @Column("interval day to second", { name: "VALUEINT", nullable: true })
  valueint: string | null;

  @Column("timestamp", { name: "VALUETS", nullable: true, scale: 6 })
  valuets: Date | null;

  @Column("number", { name: "VALUENUM", nullable: true })
  valuenum: number | null;

  @Column("varchar2", { name: "VALUESTR", nullable: true, length: 256 })
  valuestr: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 256 })
  name: string | null;

  @Column("number", { name: "TYPE", nullable: true })
  type: number | null;

  @Column("number", { name: "ATTRIBUTES", nullable: true })
  attributes: number | null;

  @Column("number", { name: "RDBID", nullable: true })
  rdbid: number | null;

  @Column("number", { name: "STATID", nullable: true })
  statid: number | null;
}
