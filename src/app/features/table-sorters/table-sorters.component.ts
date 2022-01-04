import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as data from '../../../assets/table-data.json';

@Component({
  selector: 'app-table-sorters',
  templateUrl: './table-sorters.component.html',
  styleUrls: ['./table-sorters.component.scss'],
})
export class TableSortersComponent implements OnInit {
  DATA = [
    {"name":"ABC","class":"3","section":"B","sub1":67,"sub2":75,"sub3":90},
    {"name":"XYZ","class":"3","section":"A","sub1":48,"sub2":80,"sub3":68},
    {"name":"PQR","class":"3","section":"C","sub1":84,"sub2":70,"sub3":79}
  ];
  displayedColumns: string[] = ['name', 'class', 'section', 'sub1','sub2','sub3'];
  tableData : MatTableDataSource<any> = new MatTableDataSource(this.DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  constructor() {
  }
  
  ngOnInit(): void {}
  
  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

}
