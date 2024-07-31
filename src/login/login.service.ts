import { In, Like, Raw, Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { Login } from './user.mysql.entity';

@Injectable()
export class LoginService {
  constructor(
    @Inject('LOGIN_REPOSITORY')
    private loginRepository: Repository<Login>
  ) { }

  async userLogin (login) {
    console.log(1111111)
    let data = await this.loginRepository.find()
    console.log(data);
    return '1'
  }
}
