import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent {
  _courses: string[];
  _title: string;

  constructor() {
    this._courses = ['item1', 'item2', 'item3'];
    this._title = 'Courses List : ';
  }

  courses() { return this._courses; }
  title() { return this._title; }
}
