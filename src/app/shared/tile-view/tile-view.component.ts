import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.scss']
})
export class TileViewComponent implements OnInit {

  @Input() myBooks;
  @Input() reviews;

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getRating(review) {
    const scores = review.scores;
    const total = scores.reduce((a, b) => a + b);
    const average = (total / scores.length);
    return (average / 5) * 100;
  }

  goToBookDetails(book) {
    this.storageService.setIsbn(book.industryIdentifiers[0].identifier); // TODO: is book.isbn right?
    this.router.navigateByUrl('/book-details');
  }

}
