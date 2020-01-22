import {
  CoursesService
} from './../courses.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent {
  _courses: string[];
  _title: string;

  viewCourse = "autre";

  constructor(private coursesService: CoursesService) {
    this._courses = coursesService.courses;
    this._title = 'Courses List : ';
  }

  get courses() { return this._courses; }

  get title() { return this._title; }

  addCourse() { this.coursesService.addCourse(); }

  removeCourse(course: string) { 
    this.coursesService.removeCourse(course); 
    this._courses = this.coursesService.courses;
  }

  updateCourse(course: string) {
    this.coursesService.updateCourse(course);
    this._courses = this.coursesService.courses;
  }
}
