import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  	private apiServerUrl = environment.apiBaseUrl;
	
  constructor(private http: HttpClient) { }
  
  public getCourses(): Observable<Course[]> {
	  return this.http.get<Course[]>(`${this.apiServerUrl}/candidates/courses`);	  
  }
}
