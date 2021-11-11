import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteCandidateComponent } from './components/delete-candidate/delete-candidate.component';
import { ModifyCandidateComponent } from './components/modify-candidate/modify-candidate.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'add', component: AddCandidateComponent },
  {path: 'delete', component: DeleteCandidateComponent },
  {path: 'modify', component: ModifyCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
