import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // private searchField: any;
  // private googleApiKey = 'AIzaSyBXzONnrOqcH0xQg_6ZfZnJSW69Ipbexu8';
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchField: any;
  searchResults = [];
  loaded: boolean;
  fromSubmitReview: boolean;
  reviews: any;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router) {
      //           this.searchValue = storageService.getGenre();
      // this.searchValue = storageService.nameChange.subscribe((value) => {
      //   this.searchValue = value;
      //   this.getBooks(this.storageService.getGenre());
      // });
    this.searchField = storageService.getSearchField();
    this.searchField = storageService.searchChange.subscribe((value) => {
      this.searchField = value;
      this.searchField = this.storageService.getSearchField();
      this.search();
    });
 }

  ngOnInit() {
    this.initReviews();
    this.searchField = this.storageService.getSearchField();
    if (this.searchField !== '') {
      this.search();
    } else {
      this.loaded = true;
    }
    this.fromSubmitReview = this.storageService.getFromSubmitReview();
  }

  search() {
    this.searchResults = [];

    this.httpClient.get(`${this.googleBaseUrl}${this.searchField}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      this.searchResults = JSON.parse(data_string).items;
      this.loaded = true;
    });
  }

  searchFromComponent(filterValue: string) {
    this.loaded = false;
    this.searchField = filterValue;
    this.search();
  }

  goToNextComponent(book) {
    console.log(book);
    this.storageService.setIsbn(book.industryIdentifiers[0].identifier);
    if (this.fromSubmitReview) {
      this.storageService.setTitle(book.title);
      this.storageService.setAuthor(book.authors[0]);
      this.router.navigateByUrl('/submit-review');
    } else {
      this.router.navigateByUrl('/book-details');
    }
  }

  getRating(review) {
    // const scores = review.scores;
    // const total = scores.reduce((a, b) => a + b);
    // const average = (total / scores.length);
    // return (average / 5) * 100;
    const value = Math.floor(Math.random() * (5 + 1));
    return 75;
  }

  initReviews() {
    this.reviews = [
      {title: 'Violence', scores: [4, 4, 4, 4, 5], reviews: ['lots of violence', 'shooting and guns and punching']},
      {title: 'Sex', scores: [1, 1, 2, 4, 1], reviews: ['A man and a woman talk about having sex', 'A naked man']},
      {title: 'Language', scores: [3, 3, 3, 3, 3], reviews: ['a few cuss words', 'typical usual cussing']},
      {title: 'Drugs/Alcohol', scores: [2, 2, 2, 2, 2], reviews: ['one character has a glass of wine']},
    ];
  }

}
