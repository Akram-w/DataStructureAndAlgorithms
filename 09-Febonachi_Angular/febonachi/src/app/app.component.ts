import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'febonachi';
  enteredNumber: number = 0;
  output: string = '';
  outputColor: string = 'green';

  findFebonachi() {
    try {
      let febonachiNumber = this.getFebonachi(this.enteredNumber);
      this.output = `The Febonachi Number of ${this.enteredNumber} is ${febonachiNumber}`;
      this.outputColor = 'green';
    } catch (e) {
      this.outputColor = 'red';
      this.output = e.message;
    } finally {
      this.enteredNumber = 0;
    }
  }
  getFebonachi(value: number): number {
    if (value <= 1) {
      if (value < 0) {
        throw Error("Number must be more than 0");
      }
      return value;
    }
    return this.getFebonachi(value - 1) + this.getFebonachi(value - 2);
  }
}
