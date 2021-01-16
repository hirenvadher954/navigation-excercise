import { Component, OnInit } from '@angular/core';
import { GetStudentDataService } from '../services/get-student-data.service';



@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})

export class StudentTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'sub1', 'sub2', 'avg'];
  dataSource: any;


  constructor(private _getStudentDataService: GetStudentDataService) { }

  ngOnInit(): void {
    this.dataSource = this._getStudentDataService.getStudentData();
  }

}
