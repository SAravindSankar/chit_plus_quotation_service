import { Column, Entity } from "typeorm";

@Entity("LOGMNR_GT_XID_INCLUDE$")
export class LogmnrGtXidInclude {
  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "XIDSLT", nullable: true })
  xidslt: number | null;

  @Column("number", { name: "PDBID", nullable: true })
  pdbid: number | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 390 })
  pdbName: string | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "XIDSQN", nullable: true })
  xidsqn: number | null;

  @Column("number", { name: "XIDUSN", nullable: true })
  xidusn: number | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;
}
