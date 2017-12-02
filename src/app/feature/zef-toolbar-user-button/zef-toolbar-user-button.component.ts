import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'zef-toolbar-user-button',
  templateUrl: './zef-toolbar-user-button.component.html',
  styleUrls: ['./zef-toolbar-user-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ZefToolbarUserButtonComponent implements OnInit {

  isOpen:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
