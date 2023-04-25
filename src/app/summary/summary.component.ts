import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  messages: number;
  Intent: string;
  importance: string;
  Accuracy: number;
  Catch: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Intent: "Greetings", messages: 102, importance: "98%", Accuracy: 1, Catch: '10'},
  {Intent: "Bye", messages: 54, importance: "2%", Accuracy: .5, Catch: '5'},
  {Intent: "Office hours", messages: 10, importance: "5%", Accuracy: 8, Catch: '3'},
  {Intent: "Location", messages: 45, importance: "34%", Accuracy: 5.2, Catch: '9'},
];

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']

})
export class SummaryComponent {
  displayedColumns: string[] = ['Intent', 'messages', 'importance', 'Accuracy', 'Catch'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filteredData = this.dataSource;

  applyFilter(filterValue: string) {
    this.filteredData.filter = filterValue.trim().toLowerCase();
  }
}
