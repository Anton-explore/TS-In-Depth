/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// --------------------------------------------------------

enum Category { JavaScript, CSS, HTML, TypeScript, Angular, React}

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

type BookProperties = keyof Book; // | 'isbn';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void;
}

// interface A {
//     [prop: string]: string | number;
// }

function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);
    const title = books.find(({available}) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category): string[] {
    const books = getAllBooks();

    return books
        .filter(({category}) => category === inputCategory)
        .map(({ title}) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) + BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(r);
}


// =========================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// ============================================================


// Task 3.01

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

// ================================================

const myID: string = createCustomerID('Ann', 10);
console.log(myID);

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${id}/${name}`;
idGenerator = createCustomerID;

console.log(idGenerator('Boris', 20));

// Task 3.02

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

// =================================================

createCustomer('Tosh');
createCustomer('Tosh', 30);
createCustomer('Tosh', 30, 'Kyiv');

// =================================================


// console.log(getBookTitlesByCategory(Category.CSS));
// console.log(logFirstAvailable());

function getBookByID(id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// console.log(getBookByID(1));

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`customer name: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

}

// console.log(checkoutBooks('NoName Customer', 1, 2, 3));

// ===============================================================

// Task 03.03

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available ).map(book => book.title);
        }
    }
    return [];
}

// console.log(getTitles(1, true));

// Task 03.04

function assertStringValue(data: any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('value should have been string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

// console.log(bookTitleTransform('Learn Typescript'));
// console.log(bookTitleTransform(123));
// console.log(bookTitleTransform({}));

// Task 04.01
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
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

const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 4.03

interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

// const author: Author = {
//     email: 'exp@exmpl.com',
//     name: 'Author',
//     numBooksPublished: 2
// }

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 2
};

const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: 'boris@example.com',
    department: 'Classical Literature',
    assistCustomer: null
};

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

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'isbn'));

// Task 5.01

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected year: number
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

// const ref = new ReferenceItem(1,'Learn Typescript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'ABC group'; // setter
// console.log(ref.publisher); // getter
// console.log(ref.getID());

// Task 5.02, 5.03

class Encyclopedia extends ReferenceItem {

    constructor(
        id: number,
        title: string,
        year: number,
        public edition: number
    ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

const refBook: Encyclopedia = new Encyclopedia(1, 'Learn Typescript', 2022, 2);
// refBook.printItem();
// refBook.printCitation();




