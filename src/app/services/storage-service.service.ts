import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    public isbn = '9780743247542';
    public searchField = '';

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
    }
}
