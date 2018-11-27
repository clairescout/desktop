import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    public isbn = '9780743247542';

    constructor() {
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(scope: any): void {
        this.isbn = scope;
    }
}
