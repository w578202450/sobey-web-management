import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class LoginUserDto {

  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  password: string;
}
