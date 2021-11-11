import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    CandidateListComponent,
    HomeComponent   
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
