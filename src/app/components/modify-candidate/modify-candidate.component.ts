import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { OnInit } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'modify-candidate.component.html',
  styleUrls: ['modify-candidate.component.css']
})
export class ModifyCandidateComponent implements OnInit{

    //public acandidate : Candidate[];
    public candidate : Candidate;

    



  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private candidateService: CandidateService) {
   
  }

  onSubmit(data: any){
    this.candidateService.updateCandidates({"id" : data.id, "firstName" : data.firstName, "lastName" : data.lastName, "email" : data.email, "phone" : data.phone}).subscribe(result => this.gotoList());
  } 

  gotoList(){
    this.router.navigate(['/candidates']);   
  }


  ngOnInit(): void {

    this.getCandidates();
    //this.acandidate[0] = this.candidate;
  }

  public getCandidates(): void{
  let upid = 0;
    this.route.queryParams.subscribe(params => {
        upid = params['id'];
      });


	  this.candidateService.getCandidatesById(upid).subscribe(
	  (response: Candidate) => {
		  this.candidate = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );


   //modifyCandidate.setValue({firstName : this.candidate.firstName})
  }

}
