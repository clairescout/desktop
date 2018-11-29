import { Component } from '@angular/core';
import { StorageService } from './services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desktop';

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  search(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // go to search page
    this.storageService.setSearchField(filterValue);
    if (this.router == '/search') {
      // call ngOnInit()
    }
    else {
      this.router.navigateByUrl('/search');
    }
  }
}
