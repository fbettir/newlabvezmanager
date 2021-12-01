import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { DeleteCandidateComponent } from './components/delete-candidate/delete-candidate.component';
import { ModifyCandidateComponent } from './components/modify-candidate/modify-candidate.component';

import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { CopyCourseComponent } from './components/copy-course/copy-course.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'add', component: AddCandidateComponent },
  {path: 'delete', component: DeleteCandidateComponent },
  {path: 'modify', component: ModifyCandidateComponent },
  {path: 'courses-list', component: CourseListComponent},
  {path: 'courses-add', component: AddCourseComponent},
  {path: 'courses-delete', component: DeleteCourseComponent},
  {path: 'courses-copy', component: CopyCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
