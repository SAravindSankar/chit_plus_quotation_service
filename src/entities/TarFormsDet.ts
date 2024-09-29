import { Column, Entity } from "typeorm";

@Entity("TAR_FORMS_DET")
export class TarFormsDet {
  @Column("number", {
    name: "FORMS_DETPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  formsDetpk: number | null;

  @Column("number", {
    name: "TAR_FORMSFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tarFormsfk: number | null;

  @Column("varchar2", { name: "FID_CAPTION", nullable: true, length: 20 })
  fidCaption: string | null;

  @Column("varchar2", { name: "DISP_CAPTION", nullable: true, length: 20 })
  dispCaption: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "DELID", nullable: true, length: 1 })
  delid: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
