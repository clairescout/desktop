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

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loaded = false;
    this.httpClient.get(`${this.googleBaseUrl}?isbn:9780743247542&key=${this.googleApiKey}`).subscribe( data => {
      console.log(data);
      const data_string = JSON.stringify(data);
      this.currentBook = JSON.parse(data_string).items[0].volumeInfo;
      console.log(this.currentBook);
      this.loaded = true;
    });
  }

  getRating() {
    // TODO: actually do this
    return 2;
  }

}
