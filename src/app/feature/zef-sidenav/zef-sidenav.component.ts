import { Component, OnInit ,ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'zef-sidenav',
  templateUrl: './zef-sidenav.component.html',
  styleUrls: ['./zef-sidenav.component.scss']
})
export class ZefSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeItemText:string = "";

  isActive(text: string){
    return this.activeItemText.toLowerCase() === text.toLowerCase();
  }

  setActive(event: any){
    this.activeItemText = event.target.innerText;
  }

}
