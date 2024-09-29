import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ChitMembers } from "./ChitMembers";

@Index("RECALL_PK", ["recallPk"], { unique: true })
@Entity("CHIT_CLRC")
export class ChitClrc {
  @Column("number", {
    primary: true,
    name: "RECALL_PK",
    precision: 8,
    scale: 0,
  })
  recallPk: number;

  @Column("char", { name: "CL_RC", nullable: true, length: 1 })
  clRc: string | null;

  @Column("date", { name: "CLRC_DATE", nullable: true })
  clrcDate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => ChitMembers, (chitMembers) => chitMembers.chitClrcs)
  @JoinColumn([{ name: "CHIT_MEMBERFK", referencedColumnName: "chitMemberpk" }])
  chitMemberfk: ChitMembers;
}
