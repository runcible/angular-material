import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideNavMode: string;
  sideNavOpened: string;
  title = 'Angular Material Demo';
  isDarkTheme = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSideNavView(event.target.innerWidth);
  }

  setSideNavView(width) {
    this.sideNavMode = width < 990 ? 'over' : 'side';
    this.sideNavOpened = this.sideNavMode === 'side' ? 'true' : 'false';
  }

  ngOnInit() {
    this.setSideNavView(1000);
    console.log('Done resize');
  }



}


