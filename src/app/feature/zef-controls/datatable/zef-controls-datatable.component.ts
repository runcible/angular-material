import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


const CONTROL_DATA: Control[] = [
  {position: 1, name: 'ev-interrupt-2hr', triggers: 'On 31/12/2017 from 12:30PM to 02:30AM'}
];

@Component({
  selector: 'zef-controls-datatable',
  templateUrl: './zef-controls-datatable.component.html',
  styleUrls: ['./zef-controls-datatable.component.scss']
})
/**
 * @title Table with filtering
 */
export class ZefControlsDatatableComponent implements AfterViewInit {
  displayedColumns = ['position', 'name', 'triggers'];
  @Input() public dataSource = new MatTableDataSource(CONTROL_DATA);

   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Control {
  name: string;
  position: number;
  triggers: string;
}

