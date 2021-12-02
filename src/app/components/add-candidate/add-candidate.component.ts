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
   public checkboxes : Cbox[];
   public courses : Course[];

   selectedItemsList : Cbox[];
   checkedIDs : number[];



  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private candidateService: CandidateService,
      private courseService: CourseService) {
   
  }

  onSubmit(data: any){
    this.fetchCheckedIDs();
    this.candidateService.addCandidates({"id" : 3, "firstName" : data.firstName, "lastName" : data.lastName, "email" : data.email, "phone" : data.phone}).subscribe(
      (response: Candidate) => {
		    this.candidate = response;
        this.addApplications();
	    });

    



      /* application hozzá tudom adni backcand.id alapján, checkID tömb alapján */
 } 

 addApplications(){
    for(let cid of this.checkedIDs )
    {
      this.candidateService.addApplication(cid,this.candidate.id).subscribe();
    }
    this.gotoList();
 }

  gotoList(){
    this.router.navigate(['/candidates']);
    
  }


fillCB(): void{

        this.checkboxes = [];

        this.courses.forEach((c, index) => {
              let cbdata = new Cbox();
              cbdata.id = c.id;
              cbdata.cname = new String(c.name);
              cbdata.cbt = new String(c.beginningTime);
              cbdata.isChecked = false;
              this.checkboxes.push(cbdata);      
        });
}

fetchSelectedItems() {

    this.selectedItemsList = [];

     this.selectedItemsList = this.checkboxes.filter((value, index) => {
        return value.isChecked
     });
  }

   fetchCheckedIDs() {
      this.checkedIDs = [];
      this.checkboxes.forEach((value, index) => {
         if (value.isChecked) {
            this.checkedIDs.push(value.id);
         }
      });
   }

ngOnInit(): void {

    this.courseService.getCourses().subscribe(
	    (response: Course[]) => {
		    this.courses = response;
        this.fillCB();
	    },
	    (error: HttpErrorResponse) => {
		    alert(error.message);
	    }
	   );
  }
}

class Cbox{
  id : number;
  cname : String;
  cbt: String;
  isChecked : boolean;
}
