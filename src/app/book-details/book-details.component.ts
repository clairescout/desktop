import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  currentBook: any;
  loaded: boolean;
  reviews: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loaded = false;
    this.createTestReviews();
    this.httpClient.get(`${this.googleBaseUrl}?isbn:9780743247542&key=${this.googleApiKey}`).subscribe( data => {
      console.log(data);
      const data_string = JSON.stringify(data);
      this.currentBook = JSON.parse(data_string).items[0].volumeInfo;
      console.log(this.currentBook);
      this.loaded = true;
    });
  }

  getRating(review) {
    // TODO: actually do this
    const scores = review.scores;
    const total = scores.reduce((a, b) => a + b);
    console.log('total');
    console.log(total);
    console.log('length');
    console.log(scores.length);

    const average = (total / scores.length);
    console.log('average');
    console.log(average);
    return (average / 5) * 100;
  }

  createTestReviews() {
    this.reviews = [
      {title: 'Violence', scores: [4, 4, 4, 4, 5]},
      {title: 'Sex', scores: [1, 1, 2, 4, 1]},
      {title: 'Language', scores: [3, 3, 3, 3, 3]},
      {title: 'Drugs/Alcohol', scores: [2, 2, 2, 2, 2]},
    ];
  }

}
