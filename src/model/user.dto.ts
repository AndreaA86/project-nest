import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Max, MaxLength, IsOptional, IsPositive, ArrayMinSize, ArrayMaxSize, ArrayUnique } from 'class-validator';
import { AddressDto } from './address.dto';

// vedi: https://github.com/typestack/class-validator

export class UserDto {
	
	@MaxLength(3)
	@ApiProperty({
		description: 'title description',
		required: false
	})
	title ?: string;

	@Max(10)
	@IsPositive()
	age: number;

	@ArrayMinSize(1)
	@ArrayMaxSize(5)
	@ArrayUnique()
	addresses: AddressDto[];

}