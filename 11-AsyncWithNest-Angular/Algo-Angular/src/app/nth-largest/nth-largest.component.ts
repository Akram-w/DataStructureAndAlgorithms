import { Component, OnInit } from '@angular/core';
import { AlgoServiceService } from '../algo-service.service';

@Component({
  selector: 'app-nth-largest',
  templateUrl: './nth-largest.component.html',
  styleUrls: ['./nth-largest.component.css']
})
export class NthLargestComponent implements OnInit {

  numbers: number[] = [];
  nthPostion: number = 0;
  message: string = "";
  msgColor: string = "red";

  constructor(private algoService: AlgoServiceService) { }

  ngOnInit(): void {
  }

  /**
   * function to add numbers to array
   * @param value string value pass with button click
   */
  addToArray(value: string) {
    this.numbers.push(+value)
  }
  /**
   * function triggered when find largest button clicked and set output
   * @param value string nth value which means index of largest
   * @returns 
   */
  async findNthLargest(value: string) {
    console.log(+value);
    if (!(Number.isNaN(+value))) {
      if (this.numbers.length == 1) {
        this.setMessage(`${value} Largest number is ${this.numbers[0]}`, 'green');
        return;
      }
      if (this.numbers.length == 0) {
        this.setMessage(`Enter Values to find Largest`, 'red');
        return;
      }
      if (+value == 0) {
        this.setMessage("Enter nth value", 'red');
        return
      }
      if (+value <= this.numbers.length) {
        try {
          let da = await this.algoService.findNthLargest(this.numbers, +value);

          this.setMessage(da + "", "green");
        } catch (e) {
          this.setMessage(e.message, 'red');
        }
      } else {
        this.setMessage(`Nth value should be less than ${this.numbers.length}`, 'red');
      }
    } else {
      this.setMessage("Need to be number", 'red')
    }

  }

  /**
   * function to set message and color
   * @param msg string message to display
   * @param color string color to display
   */
  setMessage(msg: string, color: string) {
    this.msgColor = color;
    this.message = msg
    this.numbers = []
  }
}
