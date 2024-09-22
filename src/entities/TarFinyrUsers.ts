import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008337", ["finyrUserspk"], { unique: true })
@Entity("TAR_FINYR_USERS")
export class TarFinyrUsers {
  @Column("number", {
    primary: true,
    name: "FINYR_USERSPK",
    precision: 6,
    scale: 0,
  })
  finyrUserspk: number;

  @Column("number", {
    name: "FIN_YEAR",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  finYear: number | null;

  @Column("number", { name: "USERFK", nullable: true, precision: 4, scale: 0 })
  userfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
