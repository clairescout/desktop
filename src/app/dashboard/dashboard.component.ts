import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeInItems } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // private googleApiKey = 'AIzaSyBXzONnrOqcH0xQg_6ZfZnJSW69Ipbexu8';
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private newYorkTimesApiKey = 'a846ecda81804214814cde1da594fdc6';
  private newYorkTimesBaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
  myBooks: any;
  loaded: boolean;
  reviews: any;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initReviews();
    this.loaded = false;
    this.myBooks = [];
    this.httpClient.get(`${this.newYorkTimesBaseUrl}?api-key=${this.newYorkTimesApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      const isbns = [];
      const results = JSON.parse(data_string).results;
      for (let i = 0; i < results.length; i++) {
        if (results[i].isbns[0] != null) {
          isbns.push(results[i].isbns[0].isbn10);
        }
      }
      this.getTheBooks(isbns);
    });
  }


  async getTheBooks(isbns): Promise<void> {
    const books = await this.getBooks(isbns, 0);
    this.loaded = true;
  }

  getBook(isbn): Promise<any> {
      return this.httpClient.get(`${this.googleBaseUrl}?isbn:${isbn}&key=${this.googleApiKey}`).toPromise();
  }

  async getBooks(isbns, i): Promise<any> {
      try {
        const response = await this.getBook(isbns[i]);
        if (response) {
          if (response.items) {
            if (response.items[0].volumeInfo.imageLinks) {
              this.myBooks.push(response.items[0].volumeInfo);
            }
          }
          if (i < isbns.length - 1) {
            return this.getBooks(isbns, ++i);
          }
        }
      } catch (error) {
        await this.handleError(error);
      }
      return this.getBook(isbns[0]); // TODO: fix this. i just put this in because it had to return a promise.
  }

  handleError(error) {
    console.log(error);
  }

  showBookInfo(book) {
    console.log('showBookInfo');
  }

  goToBookDetails(book) {
    this.storageService.setIsbn(book.industryIdentifiers[0].identifier); // TODO: is book.isbn right?
    this.router.navigateByUrl('/book-details');
  }

  initReviews() {
    this.reviews = [
      {title: 'Violence', scores: [4, 4, 4, 4, 5], reviews: ['lots of violence', 'shooting and guns and punching']},
      {title: 'Sex', scores: [1, 1, 2, 4, 1], reviews: ['A man and a woman talk about having sex', 'A naked man']},
      {title: 'Language', scores: [3, 3, 3, 3, 3], reviews: ['a few cuss words', 'typical usual cussing']},
      {title: 'Drugs/Alcohol', scores: [2, 2, 2, 2, 2], reviews: ['one character has a glass of wine']},
    ];
  }

  getRating(review) {
    const scores = review.scores;
    const total = scores.reduce((a, b) => a + b);
    const average = (total / scores.length);
    return (average / 5) * 100;
  }

}
