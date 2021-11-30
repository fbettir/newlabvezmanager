import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course;

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private courseService: CourseService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.courseService.addCourses({"id" : 3, "name" : data.name, "beginningTime" : data.beg, "duration" : data.dur, "tutorId" : 0}).subscribe(result => this.gotoList());
  }

  gotoList(){
    this.router.navigate(['/courses-list/']);
    
  }
}

