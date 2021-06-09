import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramComponent } from './anagram/anagram.component';
import { OccurancesComponent } from './occurances/occurances.component';
import { NthLargestComponent } from './nth-largest/nth-largest.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

const routes:Routes=[
  {path:"anagram",component:AnagramComponent},
  {path:"occurances",component:OccurancesComponent},
  {path:"nthlargest",component:NthLargestComponent},
  {path:"",redirectTo:"/anagram",pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    AnagramComponent,
    OccurancesComponent,
    NthLargestComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
