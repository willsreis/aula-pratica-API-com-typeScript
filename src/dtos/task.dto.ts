import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  title!: string

  @IsOptional()
  @IsBoolean()
  completed?: boolean

}

export class UpdateTaskDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsOptional()
  @IsBoolean()
  completed?: boolean
}