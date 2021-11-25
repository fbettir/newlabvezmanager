import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { CourseService } from '../../course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-root',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courses: Course[];


  constructor(private courseService: CourseService) { 
  }

  ngOnInit(): void {
    this.getCourses();

  }

  public getCourses(): void{
	  this.courseService.getCourses().subscribe(
	  (response: Course[]) => {
		  this.courses = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }

}
