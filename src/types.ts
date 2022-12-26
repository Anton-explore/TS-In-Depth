import { createCustomer } from './functions';
import { Person,Book, Author } from './interfaces';

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

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWgEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = typeof createCustomer;


// Task 7.05
export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type requiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];
export type optionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

type BookRequiredProps = requiredProps<Book>;
type BookOptionalProps = optionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};
type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

