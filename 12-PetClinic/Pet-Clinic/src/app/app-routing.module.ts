import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDashboardComponent } from "./pet/pet-dashboard/pet-dashboard.component";
import { AddPetComponent } from "./pet/add-pet/add-pet.component";
import { UpdatePetComponent } from "./pet/update-pet/update-pet.component";
import { OwnersDashboardComponent } from "./owners/owners-dashboard/owners-dashboard.component";

const routes: Routes = [
  { path: "pets", component: PetDashboardComponent },
  { path: "owners", component: OwnersDashboardComponent },
  { path: "pet/create", component: AddPetComponent },
  { path: "pets/update/:id", component: UpdatePetComponent },
  { path: "", redirectTo: "/pets", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
