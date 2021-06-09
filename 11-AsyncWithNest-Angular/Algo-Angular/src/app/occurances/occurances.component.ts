import { Component, OnInit } from '@angular/core';
import { AlgoServiceService } from '../algo-service.service';

@Component({
  selector: 'app-occurances',
  templateUrl: './occurances.component.html',
  styleUrls: ['./occurances.component.css']
})
export class OccurancesComponent implements OnInit {

  enteredText: string = '';
  message: string = '';
  msgColor: string = 'red';
  output: any = "";

  constructor(private algoService: AlgoServiceService) { }

  ngOnInit(): void {
  }

  /**
   * fuction when click find occurance button to set output
   */
  findOccurances() {
    this.algoService.findOccurances(this.enteredText).then(resp => {
      console.log(resp);
      this.output = resp;
    }).catch(err => {
      console.log(err);
      this.message = err.message;
    })
  }
}
