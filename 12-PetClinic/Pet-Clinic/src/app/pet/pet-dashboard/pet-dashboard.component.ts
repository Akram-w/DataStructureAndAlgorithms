import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Message } from 'src/app/dataModel/message';
import { MessageService } from 'src/app/services/message.service';
import { Pet } from '../data-models/Pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'specs-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.css']
})
export class PetDashboardComponent implements OnInit, OnDestroy {

  pets: Pet[] | null = [];
  petList$!: Subscription;
  petRefresh$!: Subscription;
  petDelete$!: Subscription;

  constructor(private petService: PetService,
    private msgService: MessageService) { }

  ngOnDestroy(): void {
    this.petList$.unsubscribe();
    this.petRefresh$.unsubscribe();
    // this.petDelete$?.unsubscribe();
  }

  ngOnInit(): void {
    this.load();
    this.petRefresh$ = this.petService.refresh.subscribe(value => this.pets?.push(value));
  }
  load() {
    this.petList$ = this.petService.getAllPet().subscribe(response => {
      console.log(response.body);
      this.pets = response.body;
    });
  }
  deletePet(id: number) {
    console.log(id);
    this.petDelete$ = this.petService.deletePet(+id).subscribe(response => {
      console.log(response)
      if (response.status == 200) {
        this.load();
        this.msgService.addMsg(Message.MessageTypes.success, "Pet Deleted Successfully");
      }
    })
  }

}
