import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StorageService {

    public isbn = '9780743247542';
    public searchField = '';
    public fromSubmitReview = false;
    public title = '';
    public author = '';
    public genre = 'best young adult fiction';
    nameChange: Subject<string> = new Subject<string>();
    searchChange: Subject<string> = new Subject<string>();

    constructor() {
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(scope: any): void {
        this.isbn = scope;
    }

    public getSearchField(): string {
        return this.searchField;
    }

    public setSearchField(scope: any): void {
        this.searchField = scope;
        this.searchChange.next(this.searchField);
    }

    public getFromSubmitReview(): boolean {
      return this.fromSubmitReview;
    }

    public setFromSubmitReview(scope: any): void {
      this.fromSubmitReview = scope;
    }

    public getTitle(): string {
      return this.title;
    }

    public setTitle(scope: any): void {
      this.title = scope;
    }

    public getAuthor(): string {
      return this.author;
    }

    public setAuthor(scope: any): void {
      this.author = scope;
    }

    public getGenre(): string {
      return this.genre;
    }

    public setGenre(scope: any): void {
      this.genre = scope;
      this.nameChange.next(this.genre);
    }
  }
