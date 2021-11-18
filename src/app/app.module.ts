import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteCandidateComponent } from './components/delete-candidate/delete-candidate.component';
import { ModifyCandidateComponent } from './components/modify-candidate/modify-candidate.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    CandidateListComponent,
    HomeComponent,
    DeleteCandidateComponent,
    ModifyCandidateComponent,
    CourseListComponent,
    AddCourseComponent,
    DeleteCourseComponent   
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
