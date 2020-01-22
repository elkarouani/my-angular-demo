import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses() { return ['item1', 'item2', 'item3']; }
}
