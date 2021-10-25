import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newlabvezmanagerapp';
  public candidates: Candidate[];
  
  constructor(private candidateService: CandidateService){}
  
  ngOnInit() {
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
  }

  public onOpenModal(candidate: Candidate, mode: string): void{

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addCandidateModal')
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', '#updateCandidateModal')
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteCandidateModal')
    }
    container?.appendChild(button);
    button.click();
  }


}
