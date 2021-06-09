import { Injectable } from '@nestjs/common';
import { AnagramService } from "./Helper-Services/anagram/anagram.service";
import { LetterOccuranceService } from "./Helper-Services/letter-occurance/letter-occurance.service";
import { NthHightestNumberService } from "./Helper-Services/nth-hightest-number/nth-hightest-number.service";
@Injectable()
export class AppService {
  constructor(
    private anagramService: AnagramService,
    private occuranceService: LetterOccuranceService,
    private higestService: NthHightestNumberService) { }

  findArangram(firstWord: string, secondWord: string) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.anagramService.findAnagramAlgo(firstWord, secondWord));
      } catch (e) {
        reject(e);
      }
    })
  }

  /**
 * The run function for get Letter Repitaion count
 * @param {request} req http Request object
 * @returns {Promise} The promise for letter repiation
 */
  findLetterRepitition(sentence: string) {
    return new Promise((resolve, reject) => {
      try {
        console.log(sentence)
        let response = this.occuranceService.findLetterRepitaion(sentence);
        console.log('res', response)
        resolve(response);
      } catch (e) {
        reject(e);
      }
    })
  }

  /**
    * The running function for get thrid largest number from array
    * @param {request} req http request object
    * @returns {Promise} Promise that resolves the third largest number from array
    */
  findNthLargest(array: number[], nth: number) {
    return new Promise((resolve, reject) => {
      try {
        let response = this.higestService.findNthLargestAlgo(array, nth);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    })
  }
}
