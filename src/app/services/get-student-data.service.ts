import { Injectable } from '@angular/core';


export interface Student {
  name: string;
  sub1: number;
  sub2: number;
  avg: number;
}


const STUDENT_DATA: Student[] = [
  { name: 'Hiren', sub1: 70, sub2: 80, avg: 0 },
  { name: 'Jay', sub1: 80, sub2: 80, avg: 0 },
  { name: 'Parth', sub1: 90, sub2: 75, avg: 0 },
];

@Injectable({
  providedIn: 'root'
})
export class GetStudentDataService {

  constructor() {
    for (let i = 0; i < STUDENT_DATA.length; i++) {
      STUDENT_DATA[i].avg = (STUDENT_DATA[i].sub1 + STUDENT_DATA[i].sub2) / 2;
    }
  }

  getStudentData() {
    return STUDENT_DATA;
  }
}
