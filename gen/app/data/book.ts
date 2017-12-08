import { BookInfo } from './bookInfo';

export class Book {
	constructor(
		public bookId: string,			
		public bookStatus: boolean,			
		public bookInfo: BookInfo			
	){};
}
