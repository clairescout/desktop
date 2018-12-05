import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  // private googleApiKey = 'AIzaSyBXzONnrOqcH0xQg_6ZfZnJSW69Ipbexu8';
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  myBooks: any;
  loaded: boolean;
  reviews: any;
  searchValue;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router
              ) {
      this.searchValue = storageService.getGenre();
      this.searchValue = storageService.nameChange.subscribe((value) => {
        this.searchValue = value;
        this.getBooks(this.storageService.getGenre());
      });
  }

  ngOnInit() {
    this.initReviews();
    this.loaded = false;
    this.myBooks = [];
    this.getBooks(this.storageService.getGenre());
  }

  getBooks(search) {
    this.httpClient.get(`${this.googleBaseUrl}${search}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      this.myBooks = JSON.parse(data_string).items;
      this.myBooks = this.myBooks.map(book => {
        return book.volumeInfo;
      });
      this.loaded = true;
    });
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
