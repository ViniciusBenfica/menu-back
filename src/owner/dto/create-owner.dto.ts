import { IsEmail, IsNumber, IsNotEmpty, IsString } from 'class-validator';
export class CreateOwnerDto {
  @IsNumber()
  id: number;

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
