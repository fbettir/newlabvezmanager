import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-root',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  public candidates: Candidate[];
  public candCourses: String[];


  constructor(private candidateService: CandidateService) { 
  }

  ngOnInit(): void {
    this.getCandidates();

  }

  public getCandidates(): void{
	  this.candidateService.getCandidates().subscribe(
	  (response: Candidate[]) => {
		  this.candidates = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
   /*
   	this.candidateService.getCandidatesCourses(this.candidates.id).subscribe(
	  (response: String[]) => {
		  this.candCourses = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
   */

  }

}
