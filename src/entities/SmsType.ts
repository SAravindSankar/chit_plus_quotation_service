import { Column, Entity, Index } from "typeorm";

@Index("SMSTYPEPK", ["typepk"], { unique: true })
@Entity("SMS_TYPE")
export class SmsType {
  @Column("number", { name: "TYPEPK", nullable: true, precision: 10, scale: 0 })
  typepk: number | null;

  @Column("varchar2", { name: "TYPE_NAME", nullable: true, length: 10 })
  typeName: string | null;

  @Column("varchar2", { name: "MESSAGE", nullable: true, length: 159 })
  message: string | null;
}
