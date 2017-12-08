import { Book } from './book';
import { Student } from './student';

export class BookLending {
	constructor(
		public until: any,			
		public lentBook: Book,			
		public lentBy: Student			
	){};
}
