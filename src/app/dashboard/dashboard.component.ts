import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeInItems } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private newYorkTimesApiKey = 'a846ecda81804214814cde1da594fdc6';
  private newYorkTimesBaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
  myBooks: any;
  loaded: boolean;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loaded = false;
    this.httpClient.get(`${this.newYorkTimesBaseUrl}?api-key=${this.newYorkTimesApiKey}`).subscribe( data => {
      const data_string = JSON.stringify(data);
      var isbns = [];
      var results = JSON.parse(data_string).results;
      for (let i = 0; i < results.length; i++) {
        if (results[i].isbns[0] != null) {
          isbns.push(results[i].isbns[0].isbn10);
        }
      }
      console.log(isbns);
      let books = [];
      for (let i = 0; i < isbns.length; i++) {
        const isbn = isbns[i];
        this.httpClient.get(`${this.googleBaseUrl}?isbn:${isbn}&key=${this.googleApiKey}`).subscribe( data => {
          // console.log(data);
          // try {
          //   const data_string2 = JSON.stringify(data);
          //   books.push(JSON.parse(data_string).items[0].volumeInfo);
          //   console.log('books length ' + books.length);
          // } catch (err) {
          //   console.log('Error fetching book');
          // }
          const data_string2 = JSON.stringify(data);
          if (JSON.parse(data_string2).items) {
            books.push(JSON.parse(data_string2).items[0].volumeInfo);
            console.log('books length ' + books.length);
          }
        });
      }
      this.myBooks = books;
      console.log('books length FINAL ' + books.length);
      this.loaded = true;

    });
  }

}
