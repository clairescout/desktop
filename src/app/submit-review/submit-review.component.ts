import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmitReviewComponent implements OnInit {

  private googleApiKey = 'AIzaSyBXzONnrOqcH0xQg_6ZfZnJSW69Ipbexu8';
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  // private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  categories: any;
  isbn: any;
  title: any;
  author: any;
  hasBook = false;
  showSearch = false;
  searchResults;
  hasResults = false;
  thumbnail: any;

  constructor(private router: Router,
              private storageService: StorageService,
              private httpClient: HttpClient) { } // @Inject(MAT_DIALOG_DATA) public data: any

  ngOnInit() {
    if (this.storageService.hasBook()) {
      this.isbn = this.storageService.getIsbn();
      this.title = this.storageService.getTitle();
      this.author = this.storageService.getAuthor();
      this.thumbnail = this.storageService.getThumbnail();
      this.hasBook = true;
    } else {
      this.showSearch = true;
    }
    this.initReviews();
  }

  initReviews() {
    this.categories = [
      {title: 'Violence', score: 0, review: ''},
      {title: 'Sex', score: 0, review: ''},
      {title: 'Language', score: 0, review: ''},
      {title: 'Drugs/Alcohol', score: 0, review: ''},
    ];
  }

  submit() {
    console.log(this.title);
    localStorage.setItem(this.title, JSON.stringify(this.categories));
    this.storageService.setHasBook(false);
    this.router.navigateByUrl('/book-details');
  }

  search(searchValue) {
    this.searchResults = [];

    this.httpClient.get(`${this.googleBaseUrl}${searchValue}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      this.searchResults = JSON.parse(data_string).items;
      console.log(this.searchResults);
      this.hasResults = true;
    });
  }

  searchFromComponent(searchValue: string) {
    this.search(searchValue);
  }

  setBook(book) {
    this.title = book.volumeInfo.title;
    this.author = book.volumeInfo.authors[0];
    this.isbn = book.volumeInfo.industryIdentifiers[0].identifier;
    this.thumbnail = book.volumeInfo.imageLinks.thumbnail;
    this.storageService.setIsbn(this.isbn);
    this.hasBook = true;
  }

}
