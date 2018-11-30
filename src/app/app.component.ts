import { Component } from '@angular/core';
import { StorageService } from './services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inSearch = false;
  title = 'desktop';
  isGenrePage = true;

  constructor(private storageService: StorageService,
              private router: Router) {
  }
  
  ngOnInit() {
    this.checkIsGenreAndSearchPage();
    if (this.router.url !== '/search') {
      this.inSearch = false;
    }
  }

  checkIsGenreAndSearchPage() {
    if (this.router.url !== '/genres') {
      console.log('is not genre page!');
      this.isGenrePage = false;
    }
    if (this.router.url === '/search') {
      console.log('in is search');
      this.inSearch = true;
    }
  }

  goToSearch() {
    this.storageService.setFromSubmitReview(true);
    this.router.navigateByUrl('/search');
  }

  search(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // go to search page
    this.storageService.setSearchField(filterValue);
    if (this.router.url !== '/search') {
      this.router.navigateByUrl('/search');
    }
  }

  searchBooks(string) {
    // call method on genres page?
  }
}
