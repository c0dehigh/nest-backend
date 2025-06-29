import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'First name is required',
  })
  @MinLength(3, {
    message: 'First name must be at least 3 characters long',
  })
  @MaxLength(90)
  firstName: string;
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(90)
  lastName?: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}
