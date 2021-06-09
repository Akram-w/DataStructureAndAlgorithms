import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlgoServiceService {

  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  /**
   * function to get data from server using callback method
   * @param firstWord string first word for check anagram
   * @param seconWord string second word for check anagram
   * @param callback Functio callback function needed to pass response 
   */
  findAnagram(firstWord: string, seconWord: string, callback: Function) {
    this.http.get(`${this.baseUrl}anagram?firstword=${firstWord}&secondword=${seconWord}`).subscribe(
      res => {
        console.log('res')
        callback(null, res)
      },
      err => {
        console.log('eror')
        callback(err, null)
      }
    );
  }

  /**
   * function to get data from server using promise
   * @param text string to check occurances
   * @returns Promise return promise with response
   */
  findOccurances(text: string) {
    return this.http.get(`${this.baseUrl}occurances?sentence=${text}`).toPromise();
  }

  /**
   * function to get data from server using promise
   * @param array number[] array of numbers
   * @param nth index of which largest value needed
   * @returns Promise 
   */
  async findNthLargest(array: number[], nth: number) {
    let param=array.map(value=>`array=${value}&`).join('')
    return this.http.get(`${this.baseUrl}highest?${param}nth=${nth}`).toPromise();
  }
}
