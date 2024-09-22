import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_PROFILE_TABLE$_PK", ["objid"], { unique: true })
@Entity("LOGMNR_PROFILE_TABLE_STATS$")
export class LogmnrProfileTableStats {
  @Column("number", { name: "INSERTNUM", nullable: true })
  insertnum: number | null;

  @Column("number", { name: "PARTNUM", nullable: true })
  partnum: number | null;

  @Column("number", { name: "OGGPLSQLOPNUM", nullable: true })
  oggplsqlopnum: number | null;

  @Column("number", { name: "OGGFETCHOPNUM", nullable: true })
  oggfetchopnum: number | null;

  @Column("number", { name: "OGGUNSUPPOPNUM", nullable: true })
  oggunsuppopnum: number | null;

  @Column("number", { name: "TLSBYUNSUPPOPNUM", nullable: true })
  tlsbyunsuppopnum: number | null;

  @Column("number", { name: "OPNUM", nullable: true })
  opnum: number | null;

  @Column("number", { primary: true, name: "OBJID" })
  objid: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 384 })
  name: string | null;

  @Column("varchar2", { name: "OWNER", nullable: true, length: 384 })
  owner: string | null;

  @Column("number", { name: "SPARE6", nullable: true })
  spare6: number | null;

  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("varchar2", { name: "SPARE2", nullable: true, length: 384 })
  spare2: string | null;

  @Column("varchar2", { name: "SPARE1", nullable: true, length: 384 })
  spare1: string | null;

  @Column("number", { name: "REDORATE", nullable: true })
  redorate: number | null;

  @Column("number", { name: "MAXLOBSIZE", nullable: true })
  maxlobsize: number | null;

  @Column("number", { name: "REDOSIZE", nullable: true })
  redosize: number | null;

  @Column("number", { name: "PARTITIONATTR", nullable: true })
  partitionattr: number | null;

  @Column("number", { name: "PROPERTY2", nullable: true })
  property2: number | null;

  @Column("number", { name: "PROPERTY1", nullable: true })
  property1: number | null;

  @Column("number", { name: "DDLNUM", nullable: true })
  ddlnum: number | null;

  @Column("number", { name: "DELETENUM", nullable: true })
  deletenum: number | null;

  @Column("number", { name: "UPDATENUM", nullable: true })
  updatenum: number | null;
}
