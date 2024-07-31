import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: null })
  name: string;

  @Column({ default: null })
  password: string;
}
