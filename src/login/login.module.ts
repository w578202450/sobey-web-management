import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/common/database/database.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginProviders } from './login.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    LoginController
  ],
  providers: [...LoginProviders, LoginService],
  exports: [LoginService],
})
export class LoginModule { }
