import { In, Like, Raw, Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) { }

  createOrSave(user) {
   return this.userRepository.save(user)
  }
}
