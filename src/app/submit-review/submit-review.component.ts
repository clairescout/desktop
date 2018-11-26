import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  categories: any;

  constructor() { } // @Inject(MAT_DIALOG_DATA) public data: any

  ngOnInit() {
    this.initReviews();
  }

  initReviews() {
    this.categories = [
      {title: 'Violence', score: 0, review: ''},
      {title: 'Sex', sscore: 0, review: ''},
      {title: 'Language', score: 0, review: ''},
      {title: 'Drugs/Alcohol', score: 0, review: ''},
    ];
  }

}
