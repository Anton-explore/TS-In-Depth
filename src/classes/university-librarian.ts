
import { Librarian } from '../interfaces';

export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}