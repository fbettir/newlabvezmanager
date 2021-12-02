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
	  return this.http.get<Candidate[]>(`${this.apiServerUrl}/candidates/`);	  
  }

    public getCandidatesById(candidateID: number): Observable<Candidate> {
	  return this.http.get<Candidate>(`${this.apiServerUrl}/candidates/${candidateID}`);	  
  }

  public addCandidates(candidate: Candidate): Observable<any> {
	  return this.http.post<any>(`${this.apiServerUrl}/candidates/`, candidate);	  
  }
  
  public updateCandidates(candidate: Candidate): Observable<void> {
	  return this.http.put<any>(`${this.apiServerUrl}/candidates/`, candidate);	  
  }

  public deleteCandidates(candidateID: number): Observable<any> {
    let a = `${this.apiServerUrl}/candidates/${candidateID}`;
	  return this.http.delete<any>(a);	
  }

  public addApplication(coId: number, caId: number): Observable<any>{
    let app = new App();
    app.courseId = coId;
    app.candidateId = caId;
    console.log(app);
    return this.http.post<any>(`${this.apiServerUrl}/applications`, app);	  
  }
  
}

class App{
  courseId: number;
  candidateId: number;
}
