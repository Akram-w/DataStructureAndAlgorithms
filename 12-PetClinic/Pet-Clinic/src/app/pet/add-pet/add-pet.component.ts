import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/dataModel/message';
import { MessageService } from 'src/app/services/message.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit, OnDestroy {

  petAdder$!: Subscription;
  
  currentDate=this.gettoday();
  constructor(private fb: FormBuilder,
    private petService: PetService,
    private msgService: MessageService) { }

  ngOnDestroy(): void {
    // this.petAdder$.unsubscribe();
  }

  ngOnInit(): void {
  }
  gettoday(){
    let now=new Date();
    return now.toISOString().split('T')[0]
  }

  petForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    breed: ['', Validators.required],
    age: ['', Validators.required],
    nextCheckupDate: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.petForm.value)
    this.petAdder$ = this.petService.savePet(this.petForm.value).subscribe(response => {
      if (response.status == 201) {
        this.msgService.addMsg(Message.MessageTypes.success, "Pet Created Successfully");
        this.petForm.reset();
      }
    });
  }
}
