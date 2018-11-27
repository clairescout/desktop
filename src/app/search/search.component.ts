import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchField: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.searchField = this.storageService.getSearchField();
    console.log(this.searchField);
  }

}
