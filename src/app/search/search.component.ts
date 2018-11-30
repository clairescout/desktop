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
  private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  // private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  // private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchField: any;
  searchResults = [];
  loaded: boolean;
  fromSubmitReview: boolean;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
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

}
