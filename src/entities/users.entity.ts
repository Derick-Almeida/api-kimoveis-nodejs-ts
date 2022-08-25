import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { ScheluderUserPropertie } from "./schedulesUsersProperties.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ unique: true, length: 1500 })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ length: 75 })
  @Exclude()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToMany(
    () => ScheluderUserPropertie,
    (scheluderUserPropertie) => scheluderUserPropertie.user
  )
  scheludes_users_properties: ScheluderUserPropertie[];
}

export { User };
