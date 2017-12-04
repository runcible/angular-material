import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'zef-sidenav-item',
  templateUrl: './zef-sidenav-item.component.html',
  styleUrls: ['./zef-sidenav-item.component.scss']
})
export class ZefSidenavItemComponent implements OnInit {
  @Input() public icon:string;
  @Input() public text:string;
  @Input() public route:string;

  constructor() {}

  ngOnInit() {
  }

}
