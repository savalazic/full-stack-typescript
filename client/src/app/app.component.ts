import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { CourseDetail } from '../../../shared/model/course-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  course$: Observable<CourseDetail>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.course$ = this.coursesService.loadCourseDetail(1);
  }
  
}
