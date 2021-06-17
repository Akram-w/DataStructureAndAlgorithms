import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersDashboardComponent } from './owners-dashboard/owners-dashboard.component';



@NgModule({
  declarations: [
    OwnersDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OwnersDashboardComponent
  ]
})
export class OwnersModule { }
