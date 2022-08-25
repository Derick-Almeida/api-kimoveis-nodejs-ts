import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Propertie } from "./properties.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Propertie, (propertie) => propertie.category)
  properties: Propertie[];
}

export { Category };
