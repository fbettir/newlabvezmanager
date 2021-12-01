import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';
import { Course } from '../../course';
import { CourseService } from '../../course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'add-candidate.component.html',
  styleUrls: ['add-candidate.component.css']
})
export class AddCandidateComponent{

   candidate : Candidate;
   public courses: Course[];



  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private candidateService: CandidateService,
      private courseService: CourseService) {
   
  }

  onSubmit(data: any){
    //let a = ["5", "4", "2"];
    this.candidateService.addCandidates({"id" : 3, "firstName" : data.firstName, "lastName" : data.lastName, "email" : data.email, "phone" : data.phone}/*, a*/).subscribe(result => this.gotoList());
  } 

  gotoList(){
    this.router.navigate(['/candidates']);
    
  }


  ngOnInit(): void {
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
