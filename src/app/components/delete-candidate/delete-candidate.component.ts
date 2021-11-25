import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent implements OnInit {

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private candidateService: CandidateService) { }

  ngOnInit(): void {

  this.route.queryParams.subscribe(params => {
        let id = params['id'];
        this.candidateService.deleteCandidates(id).subscribe();
        //this.router.navigate(['/candidates']);
      });
  }

}
