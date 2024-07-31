import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginUserDto } from './login.dto';

@ApiTags('用户')
@Controller('login')
export class LoginController {
  constructor(
    private readonly userService: LoginService,
  ) { }

  @ApiOperation({
    summary: '登陆',
  })
  @Post('/login')
  create(@Body() login: LoginUserDto) {
    return this.userService.userLogin(login);
  }
}
