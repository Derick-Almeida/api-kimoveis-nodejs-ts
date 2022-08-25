import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Propertie } from "./properties.entity";
import { User } from "./users.entity";

@Entity("scheluders_users_properties")
class ScheluderUserPropertie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Propertie)
  property: Propertie;

  @ManyToOne(() => User)
  user: User;
}

export { ScheluderUserPropertie };
