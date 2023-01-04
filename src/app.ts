import { ReferenceItem, UL, RefBook, Library, Shelf } from './classes';
import { Category } from './enums';
import * as func from './functions';
import * as interfaces from './interfaces';
import { Library as Lib } from './classes/library';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';


func.showHello('greeting', 'TypeScript');

// =========================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// ============================================================


// Task 3.01

// ================================================

// const myID: string = func.createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof func.createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = func.createCustomerID;

// console.log(idGenerator('Boris', 20));

// Task 3.02

// =================================================

// func.createCustomer('Tosh');
// func.createCustomer('Tosh', 30);
// func.createCustomer('Tosh', 30, 'Kyiv');

// =================================================


// console.log(getBookTitlesByCategory(Category.CSS));
// console.log(logFirstAvailable());



// console.log(getBookByID(1));



// console.log(checkoutBooks('NoName Customer', 1, 2, 3));

// ===============================================================

// Task 03.03


// console.log(getTitles(1, true));

// Task 03.04

// console.log(bookTitleTransform('Learn Typescript'));
// console.log(bookTitleTransform(123));
// console.log(bookTitleTransform({}));

// ===============================================================

// Task 04.01

const myBook: interfaces.Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 4.02

// const logDamage: interfaces.Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: interfaces.DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 4.03

// const author: Author = {
//     email: 'exp@exmpl.com',
//     name: 'Author',
//     numBooksPublished: 2
// }

const favoriteAuthor: interfaces.Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 2
};

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// };

// Task 4.04

const offer: any = {
    book: {
        title: 'Essential Typescript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[10]?.name);

// Task 4.05

// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'isbn'));

// ===============================================================

// Task 5.01

// const ref = new ReferenceItem(1,'Learn Typescript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'ABC group'; // setter
// console.log(ref.publisher); // getter
// console.log(ref.getID());

// Task 5.02, 5.03

// const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();

// Task 5.04

// Task 5.05

const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    title: 'Unknown'
};

// const options: TOptions = { duration: 20};
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// ===============================================================

// Task 6.01

// Task 6.03, 6.04

// const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
// func.printRefBook(refBook);

// const favoriteLibrarian: interfaces.Librarian = new UL.UniversityLibrarian();

// Task 6.05
// const flag = true;
// const flag = false;

// promise dynamic import

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(func.getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// async dynamic import
// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(func.getAllBooks()[0]);
//     console.log(reader);
// }


//  Task 6.06
// let library: Library = new Lib();

// ===============================================================

// Task 7.01

const inventory: interfaces.Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = func.purge(['123','234','345']);
// console.log(result);
// const result1 = func.purge(inventory);
// console.log(result1);
// const result3 = func.purge([1, 2, 3]);
// console.log(result3);


// Task 7.02, 7.03

// const bookShelf = new Shelf<interfaces.Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: interfaces.Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<interfaces.Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(func.getObjectProperty(magazines[0], 'title'));
// console.log(func.getObjectProperty<interfaces.Book, 'author' | 'title'>(inventory[1], 'author'));

// Task 7.04

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };
// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// func.createCustomer(...params);

// ===============================================================
// Decorators
// ===============================================================

// Task 8.01, 8.02
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2; // не добавит
// UL.UniversityLibrarian.prototype['a'] = 3; // не добавит

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();

// Task 8.03
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// Task 8.04
// const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
// refBook.printItem();

// Task 8.05
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');

// Task 8.06
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');
// console.log(favoriteLibrarian);

// Task 8.07
const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
console.log(refBook.copies);
refBook.copies = 10;
// refBook.copies = -10;
console.log(refBook.copies);

// ===============================================================
// Async typescript
// ===============================================================

// Task 9.01

// console.log('Begin');
// func.getBooksByCategory(Category.JavaScript, func.logCategorySearch);
// func.getBooksByCategory(Category.Software, func.logCategorySearch);
// console.log('End');

// Task 9.02

// console.log('Begin');
// func.getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(num => console.log(num))
//     .catch(reason => console.log(reason));
// func.getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 9.03

// console.log('Begin');
// func.logSearchResult(Category.JavaScript);
// func.logSearchResult(Category.Software)
//     .catch(err => console.log(err));
// console.log('End');

// Extra, DOM elements type

// const el1 = document.querySelector<HTMLElement>('#greeting');
// console.log(el1);

// if (el1 instanceof HTMLElement) {
//     console.log('+++');
// } else {
//     console.log('---');
// }