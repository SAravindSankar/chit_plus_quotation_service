import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1DICTIONARY$", ["logmnrUid"], {})
@Entity("LOGMNR_DICTIONARY$")
export class LogmnrDictionary {
  @Column("number", { name: "FED_ROOT_CON_ID#", nullable: true })
  fedRootConId: number | null;

  @Column("varchar2", { name: "PDB_GLOBAL_NAME", nullable: true, length: 384 })
  pdbGlobalName: string | null;

  @Column("number", { name: "PDB_COUNT", nullable: true })
  pdbCount: number | null;

  @Column("number", { name: "PDB_CREATE_SCN", nullable: true })
  pdbCreateScn: number | null;

  @Column("raw", { name: "PDB_GUID", nullable: true, length: 16 })
  pdbGuid: Buffer | null;

  @Column("number", { name: "PDB_DBID", nullable: true })
  pdbDbid: number | null;

  @Column("number", { name: "PDB_UID", nullable: true })
  pdbUid: number | null;

  @Column("number", { name: "PDB_ID", nullable: true })
  pdbId: number | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 384 })
  pdbName: string | null;

  @Column("number", {
    name: "LOGMNR_FLAGS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrFlags: number | null;

  @Column("number", {
    name: "LOGMNR_UID",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrUid: number | null;

  @Column("number", { name: "DB_DICT_OBJECTCOUNT", precision: 22, scale: 0 })
  dbDictObjectcount: number;

  @Column("number", {
    name: "DB_DICT_MAXOBJECTS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dbDictMaxobjects: number | null;

  @Column("varchar2", { name: "DB_GLOBAL_NAME", nullable: true, length: 384 })
  dbGlobalName: string | null;

  @Column("varchar2", { name: "DB_STATUS", nullable: true, length: 240 })
  dbStatus: string | null;

  @Column("varchar2", { name: "DB_VERSION", nullable: true, length: 240 })
  dbVersion: string | null;

  @Column("varchar2", { name: "DB_CHARACTER_SET", nullable: true, length: 192 })
  dbCharacterSet: string | null;

  @Column("varchar2", { name: "DB_REDO_RELEASE", nullable: true, length: 60 })
  dbRedoRelease: string | null;

  @Column("varchar2", { name: "DB_REDO_TYPE_ID", nullable: true, length: 8 })
  dbRedoTypeId: string | null;

  @Column("varchar2", { name: "DB_VERSION_TIME", nullable: true, length: 20 })
  dbVersionTime: string | null;

  @Column("varchar2", { name: "DB_RESETLOGS_TIME", nullable: true, length: 20 })
  dbResetlogsTime: string | null;

  @Column("number", {
    name: "DB_RESETLOGS_CHANGE#",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dbResetlogsChange: number | null;

  @Column("number", {
    name: "DB_TXN_SCNWRP",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dbTxnScnwrp: number | null;

  @Column("number", {
    name: "DB_TXN_SCNBAS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dbTxnScnbas: number | null;

  @Column("raw", { name: "DB_THREAD_MAP", nullable: true, length: 8 })
  dbThreadMap: Buffer | null;

  @Column("number", {
    name: "DB_DICT_SCN",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  dbDictScn: number | null;

  @Column("varchar2", { name: "DB_DICT_CREATED", nullable: true, length: 20 })
  dbDictCreated: string | null;

  @Column("varchar2", { name: "DB_CREATED", nullable: true, length: 20 })
  dbCreated: string | null;

  @Column("number", { name: "DB_ID", nullable: true, precision: 20, scale: 0 })
  dbId: number | null;

  @Column("varchar2", { name: "DB_NAME", nullable: true, length: 27 })
  dbName: string | null;
}
