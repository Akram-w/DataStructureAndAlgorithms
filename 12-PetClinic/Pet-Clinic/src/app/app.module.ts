import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetModule } from "./pet/pet.module";
import { OwnersModule } from "./owners/owners.module";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from "@angular/material/icon";
import { MessageService } from "./services/message.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PetModule,
    OwnersModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
