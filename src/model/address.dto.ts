import { MaxLength } from 'class-validator';

export class AddressDto {
	
	@MaxLength(30)
	description: string;

}