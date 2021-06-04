import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VowelSorter';
  enteredText: string = '';
  outputArray: Array<string> = []
  message: string = '';
  msgColor: string = 'red';

  /**
   * function triggered when Sort Paragraph button triggered
   */
  sortVowel() {
    this.message = "";
    this.outputArray = []
    if (this.enteredText) {
      let arrayOfText = this.enteredText.split(" ");
      let vowelArray = this.getVowelArray(arrayOfText);
      this.outputArray = this.getSortedArray(vowelArray)
      this.msgColor='green'
      this.message=`${this.outputArray.length} vowel included words found from ${arrayOfText.length} words`
    } else {
      this.msgColor = 'red'
      this.message = "Enter a text to sort"
    }
  }
  /**
   * function to get vowel string array and sort it to ascending order
   * @param vowelArray String array only contains vowel words
   * @returns Sorted array in natural order (A-Z)
   */
  getSortedArray(vowelArray: Array<string>) {
    return vowelArray.sort((word1, word2) => word1.toLowerCase() > word2.toLowerCase() ?
      1 : (word1 == word2) ? 0 : -1);
  }

  /**
   * function to filter words which contains vowel
   * @param arrayOfText sting array which contain all the string enterd by user as array
   * @returns string array which contains only words which contains vowel
   */
  getVowelArray(arrayOfText: Array<string>): Array<string> {
    let tempArray = [];
    for (let word of arrayOfText) {
      let reg = new RegExp(/[aeiou]/i);
      if (reg.test(word)) {
        tempArray.push(word);
      }
    }
    console.log('re')
    return tempArray;
  }
}
