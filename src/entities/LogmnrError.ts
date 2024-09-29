import { Column, Entity } from "typeorm";

@Entity("LOGMNR_ERROR$")
export class LogmnrError {
  @Column("varchar2", { name: "SPARE5", nullable: true, length: 4000 })
  spare5: string | null;

  @Column("varchar2", { name: "SPARE4", nullable: true, length: 4000 })
  spare4: string | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "MESSAGE", nullable: true, length: 4000 })
  message: string | null;

  @Column("number", { name: "CODE", nullable: true })
  code: number | null;

  @Column("date", { name: "TIME_OF_ERROR", nullable: true })
  timeOfError: Date | null;

  @Column("number", { name: "SESSION#", nullable: true })
  session: number | null;
}
