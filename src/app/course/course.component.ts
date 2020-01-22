import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent {
  _courses: string[];
  _title: string;

  constructor(coursesService: CoursesService) {
    this._courses = coursesService.courses();
    this._title = 'Courses List : ';
  }

  courses() { return this._courses; }
  title() { return this._title; }
}
