import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  _courses: string[];

  constructor() {
    this._courses = ['item1', 'item2', 'item3'];
  }

  get courses() { return this._courses; }

  addCourse() { this._courses.push('item') }

  removeCourse(course: string) { 
    this._courses = this._courses.filter(item => item !== course); 
  }

  updateCourse(course: string) {
    this._courses[this._courses.indexOf(course)] += "-updated";
  }
}
