import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'add', component: AddCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
