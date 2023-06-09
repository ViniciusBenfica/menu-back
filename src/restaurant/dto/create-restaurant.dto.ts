import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsNumber()
  @IsNotEmpty()
  ownerId: number;
}
