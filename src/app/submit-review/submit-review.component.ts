import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  categories: any;
  book: any;

  constructor(private router: Router) { } // @Inject(MAT_DIALOG_DATA) public data: any

  ngOnInit() {
    this.initReviews();
  }

  initReviews() {
    this.categories = [
      {title: 'Violence', score: 0, review: ''},
      {title: 'Sex', score: 0, review: ''},
      {title: 'Language', score: 0, review: ''},
      {title: 'Drugs/Alcohol', score: 0, review: ''},
    ];
  }

  submit() {
    localStorage.setItem('The Glass Castle', JSON.stringify(this.categories)); // TODO: fix this
    this.router.navigateByUrl('/book-details');
  }

}
