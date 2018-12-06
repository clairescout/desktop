import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ContentModalComponent } from './content-modal/content-modal.component';
import { MatDialog } from '@angular/material';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  // private googleApiKey = 'AIzaSyBXzONnrOqcH0xQg_6ZfZnJSW69Ipbexu8';
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  currentBook: any;
  currentIsbn: string;
  loaded: boolean;
  reviews: any;

  constructor(private httpClient: HttpClient,
    private dialog: MatDialog,
    private storageService: StorageService,
    private router: Router) {
  }

  ngOnInit() {
    this.loaded = false;
    this.currentIsbn = this.storageService.getIsbn();
    this.httpClient.get(`${this.googleBaseUrl}?isbn:${this.currentIsbn}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      this.currentBook = JSON.parse(data_string).items[0].volumeInfo;
      this.getTestReviews();
      this.loaded = true;
    });
  }

  getRating(review) {
    const scores = review.scores;
    const total = scores.reduce((a, b) => a + b);
    const average = (total / scores.length);
    return (average / 5) * 100;
  }

  getTestReviews() {
    this.reviews = [
      {title: 'Violence', scores: [4, 4, 4, 4, 5], reviews: ['lots of violence', 'shooting and guns and punching']},
      {title: 'Sex', scores: [1, 1, 2, 4, 1], reviews: ['A man and a woman talk about having sex', 'A naked man']},
      {title: 'Language', scores: [3, 3, 3, 3, 3], reviews: ['a few cuss words', 'typical usual cussing']},
      {title: 'Drugs/Alcohol', scores: [2, 2, 2, 2, 2], reviews: ['one character has a glass of wine']},
    ];
    const review = localStorage.getItem(this.currentBook.title);
    if (review) {
      const reviewObject = JSON.parse(review);
      for (let i = 0; i < 4; i++) {
        this.reviews[i].scores.push(reviewObject[i].score);
        if (reviewObject[i].review !== '') {
          this.reviews[i].reviews.push(reviewObject[i].review);
        }
      }
    }
  }

  showContentModal(review) {
    this.dialog.open(ContentModalComponent, {
      width: '700px',
      data: review
    });
  }

  submitReview() {
    this.storageService.setIsbn(this.currentIsbn);
    this.storageService.setTitle(this.currentBook.title);
    this.storageService.setAuthor(this.currentBook.authors[0]);
    this.storageService.setThumbnail(this.currentBook.imageLinks.thumbnail);
    this.storageService.setHasBook(true);
    this.router.navigateByUrl('/submit-review');
  }

}
