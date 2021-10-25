import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';



const routes: Routes = [
  {path: '', redirectTo: 'candidates', pathMatch: 'full'},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'add', component: AddCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
