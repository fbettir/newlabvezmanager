import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course} from '../../course';
import { CourseService } from '../../course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { OnInit } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'copy-course.component.html',
  styleUrls: ['copy-course.component.css']
})
export class CopyCourseComponent implements OnInit{

  public course : Course;   

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private courseService: CourseService) {
   
  }


  ngOnInit(): void {
    this.getCourses();
  }

   onSubmit(data: any){
    this.courseService.addCourses({"id" : 3, "name" : data.name, "beginningTime" : data.beg, "duration" : data.dur, "tutorId" : 0}).subscribe(result => this.gotoList());
  }

  gotoList(){
    this.router.navigate(['/courses-list']);   
  }

  public getCourses(): void{
  let upid = 0;
    this.route.queryParams.subscribe(params => {
        upid = params['id'];
      });


	  this.courseService.getCoursesById(upid).subscribe(
	  (response: Course) => {
		  this.course = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }

}
