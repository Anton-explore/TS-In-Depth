import { Person,Book } from './interfaces';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

export type BookProperties = keyof Book; // | 'isbn';


export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;