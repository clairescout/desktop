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
  // private googleApiKey = 'AIzaSyApxADsUGvvmAhQw4WhZjPrEduztHjhtms';
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private newYorkTimesApiKey = 'a846ecda81804214814cde1da594fdc6';
  private newYorkTimesBaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
  myBooks: any;
  loaded: boolean;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
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
    this.storageService.setIsbn(book.isbn); // TODO: is book.isbn right?
    this.router.navigateByUrl('/book-details');
  }

}
