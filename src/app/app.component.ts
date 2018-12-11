import { Component } from '@angular/core';
import { StorageService } from './services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notSearch = false;
  title = 'desktop';
  isGenrePage = true;
  theGenre = '';

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.checkIsGenreAndSearchPage();
    if (this.router.url ==='/dashboard' || this.router.url === '/') {
      this.theGenre = 'nyt';
    }
    else if (this.router.url ==='/genre') {
      this.theGenre = 'ya';
    }
  }

  checkIsGenreAndSearchPage() {
    if (this.router.url !== '/genres') {
      console.log('is not genre page!');
      this.isGenrePage = false;
    }
    if (this.router.url === '/search') {
      console.log('is search');
      this.notSearch = false;
    }
  }

  goToSearch() {
    this.storageService.setFromSubmitReview(true);
    // window.location.reload(); // why is this here?
    this.router.navigateByUrl('/search');
  }

  search(filterValue: string) {
    this.setGenre('');
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // go to search page
    this.storageService.setSearchField(filterValue);
    if (this.router.url !== '/search') {
      this.router.navigateByUrl('/search');
    } else {
      // window.location.reload();
    }
  }

  routeToDashboard() {
    this.theGenre = 'nyt';
    this.router.navigateByUrl('/dashboard');
  }

  searchBooks(string, genre) {
    this.storageService.setGenre(string);
    this.theGenre = genre;
    // window.location.reload();
  }

  isPage(current) {
    if (this.theGenre === current) {
      console.log('current ' + current);
      console.log('this.router.url ' + this.router.url);
      return true;
    }
    return false;
  }

  setGenre(current) {
    this.theGenre = current;
  }
}
