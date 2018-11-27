import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    public isbn: string| boolean = false;

    constructor() {
    }

    public getIsbn(): string | boolean {
        return this.isbn;
    }

    public setScope(scope: any): void {
        this.isbn = scope;
    }
}