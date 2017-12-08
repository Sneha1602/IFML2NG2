import { Student } from './student';
import { Book } from './book';

export class BookReservation {
	constructor(
		public reservedBy: Student,			
		public reservedBook: Book			
	){};
}
