import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'add-candidate.component.html',
  styleUrls: ['add-candidate.component.css']
})
export class AddCandidateComponent{

   candidate : Candidate;



  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private candidateService: CandidateService) {
   
  }

  onSubmit(data: any){
   // TODO: ID léptetés???
    this.candidateService.addCandidates({"id" : 3, "firstName" : data.firstName, "lastName" : data.lastName, "email" : data.email, "phone" : data.phone}).subscribe(result => this.gotoList());
  } 

  gotoList(){
    this.router.navigate(['/candidates']);
    
  }


  ngOnInit(): void {
  }

}
