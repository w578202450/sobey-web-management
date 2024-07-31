import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [getConfig],
    ignoreEnvFile: true,
  }), UserModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
