import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateOwnerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
