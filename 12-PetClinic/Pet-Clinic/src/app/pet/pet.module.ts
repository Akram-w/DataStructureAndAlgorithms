import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { MessageService } from "../services/message.service";


@NgModule({
  declarations: [
    PetDashboardComponent,
    AddPetComponent,
    UpdatePetComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  exports: [
    PetDashboardComponent
  ]
})
export class PetModule { }
