import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator'

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name!: string

  @IsEmail()
  email!: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password!: string
}

export class UpdateUserDTO{
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password?: string
}