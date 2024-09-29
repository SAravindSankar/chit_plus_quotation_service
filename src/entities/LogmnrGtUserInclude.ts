import { Column, Entity } from "typeorm";

@Entity("LOGMNR_GT_USER_INCLUDE$")
export class LogmnrGtUserInclude {
  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 390 })
  pdbName: string | null;

  @Column("number", { name: "USER_TYPE", nullable: true })
  userType: number | null;

  @Column("varchar2", { name: "USER_NAME", nullable: true, length: 390 })
  userName: string | null;
}
