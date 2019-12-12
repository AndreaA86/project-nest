import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

// export class UserDto {
	
// 	@ApiProperty({		
// 		description: 'The age of a cat',
// 		required : false
// 	})
// 	@IsNotEmpty()
// 	title?: string;
	
// 	@ApiProperty({
// 		description: 'The age of a cat',
// 		minimum: 1,
// 		default: 1,
// 	  })
// 	  age: number;
// }

export class UserDto {
	
	title?: string;
	age: number;
}