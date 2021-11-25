import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private courseService: CourseService) { }
    

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        let id = params['id'];
        this.courseService.deleteCourses(id).subscribe();
    });

  }

}

