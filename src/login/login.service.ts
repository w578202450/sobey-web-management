import { In, Like, Raw, Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.mysql.entity';

@Injectable()
export class LoginService {
  constructor(
    @Inject('LOGIN_REPOSITORY')
    private loginRepository: Repository<User>
  ) { }

  async userLogin (login) {
    let data = await this.loginRepository.find()
    console.log(data);
    return '1'
  }
}
