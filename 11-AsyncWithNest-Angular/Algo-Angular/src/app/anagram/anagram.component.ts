import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlgoServiceService } from '../algo-service.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

  wordOne: string = '';
  wordTwo: string = '';
  message: string = '';
  msgColor: string = 'red';

  constructor(private algoService: AlgoServiceService) { }

  ngOnInit(): void {
  }

  /**
   * function triggered when button click and set output
   */
  findAnagram() {
    console.log(this.wordOne, this.wordTwo)
    this.algoService.findAnagram(this.wordOne, this.wordTwo,
      (err: HttpErrorResponse, res: string) => {
        if (err) {
          this.msgColor = 'red';
          this.message = err.message;
        } else {
          this.msgColor = 'green';
          this.message = res;
        }
      });
  }
  /**
   * function to set all the inputs to default
   */
  retsetView() {
    this.wordOne = '';
    this.wordTwo = '';
  }
}
