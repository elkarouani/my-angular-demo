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
  _course: object;
  _paragraph: string;

  constructor(coursesService: CoursesService) {
    this._courses = coursesService.courses();
    this._title = 'Courses List : ';
    this._course = {
      titre: 'Formation Angular',
      avis: '4.9762',
      participants: 136,
      prix: 950.38,
      publicationDate: new Date(2017, 11, 21)
    };
    this._paragraph = 'kjfhdskjlfhqlskdjhgflkjshqk';
  }

  get course() { return this._course; }

  get courses() { return this._courses; }

  get title() { return this._title; }

  get paragraph() { return this._paragraph; }
}
