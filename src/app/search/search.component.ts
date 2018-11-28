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
  private searchField: any;
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  // private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleApiKey = 'AIzaSyCaj2CVGkrMwM9__MjQLBaEbCoGKFWVlAw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchResults: any;
  loaded: boolean;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.searchResults = [];
    this.searchField = this.storageService.getSearchField();
    this.httpClient.get(`${this.googleBaseUrl}${this.searchField}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      this.searchResults = JSON.parse(data_string).items;
      this.loaded = true;
    });
  }

  goToBookDetails(book) {
    this.storageService.setIsbn(book.industryIdentifiers[0].identifier); // TODO: is book.isbn right?
    this.router.navigateByUrl('/book-details');
  }

}
