import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1USER$", ["logmnrUid", "user"], {})
@Index("LOGMNR_I2USER$", ["logmnrUid", "name"], {})
@Entity("LOGMNR_USER$")
export class LogmnrUser {
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

  @Column("varchar2", { name: "NAME", length: 384 })
  name: string;

  @Column("number", { name: "USER#", nullable: true, precision: 22, scale: 0 })
  user: number | null;
}
