import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchField: any;
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchResults: any;
  loaded: boolean;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService) { }

  ngOnInit() {
    this.searchField = this.storageService.getSearchField();
    this.httpClient.get(`${this.googleBaseUrl}${this.searchField}&key=${this.googleApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      // this.currentBook = JSON.parse(data_string).items[0].volumeInfo;
      console.log(JSON.parse(data_string).items.length);
      this.loaded = true;
    });
  }

}
