import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  description: string;

  @IsString()
  logo: string;

  @IsNumber()
  @IsNotEmpty()
  ownerId: number;
}
