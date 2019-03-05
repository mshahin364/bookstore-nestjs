import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(bookId): Promise<any> {
    return new Promise(resolve => {
      const book = this.books.find(bok => bok.id === +bookId);
      if (!book) {
        throw new HttpException('Books does not exist', 404);
      }
      resolve(book);
    });
  }

  addBook(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  deleteBook(bookId): Promise<any> {
    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === +bookId);
      if (index === -1) {
        throw new HttpException('Book does not exist', 404);
      }
      this.books.splice(index, 1);
      resolve(this.books);
    });
  }
}
