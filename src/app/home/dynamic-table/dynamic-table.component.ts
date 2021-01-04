import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Iuser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent implements OnInit {

  @Input() headerColumns: string[];
  @Input() dataColumns: Iuser[];
  
  tableDataSource: any
  constructor( ) { }

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource(this.dataColumns);

  }

}
