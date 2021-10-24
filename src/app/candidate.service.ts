import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
	
	private apiServerUrl = environment.apiBaseUrl;
	

  constructor(private http: HttpClient) { }
  
  public getCandidates(): Observable<Candidate[]> {
	  return this.http.get<Candidate[]>(`${this.apiServerUrl}/candidate/all`);	  
  }

  public addCandidates(candidate: Candidate): Observable<any> {
	  return this.http.post<any>(`${this.apiServerUrl}/candidate/add`, candidate);	  
  }
  
  public updateCandidates(candidate: Candidate): Observable<void> {
	  return this.http.put<any>(`${this.apiServerUrl}/candidate/update`, candidate);	  
  }

  public deleteCandidates(candidateID: number): Observable<any> {
	  return this.http.delete<any>(`${this.apiServerUrl}/candidate/delete/${candidateID}`);	
  }
  
  

}
