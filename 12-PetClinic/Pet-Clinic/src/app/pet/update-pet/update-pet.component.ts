import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/dataModel/message';
import { PetService } from '../pet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit, OnDestroy {

  pet$!: Subscription;
  petUpdated$!: Subscription;
  petId!: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private petService: PetService,
    private msgService: MessageService
  ) { }

  ngOnDestroy(): void {
    this.pet$.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.pet$ = this.petService.getPet(+param.id).subscribe(response => {
        const pet = response.body;
        this.petForm.patchValue(
          {
            name: pet?.name,
            type: pet?.type,
            breed: pet?.breed,
            age: pet?.age,
            nextCheckupDate: pet?.nextCheckupDate
          })
      })
    });
  }

  petForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    breed: ['', Validators.required],
    age: ['', Validators.required],
    nextCheckupDate: ['', Validators.required],
  });

  /**
   * function triggered when user click update button
   */
  onSubmit() {
    console.log(this.petForm.value)
    let id = this.route.snapshot.paramMap.get('id');
    this.petUpdated$ = this.petService.updatePet({ id: id, ...this.petForm.value }).subscribe(response => {
      if (response.status == 200) {
        this.msgService.addMsg(Message.MessageTypes.success, "Pet Updated Successfully");
        this.router.navigate(['/'])
      }
    });
  }
}
