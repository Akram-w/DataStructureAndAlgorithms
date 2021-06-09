import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlgoServiceService {

  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

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

  findOccurances(text: string) {
    return this.http.get(`${this.baseUrl}occurances?sentence=${text}`).toPromise();
  }

  async findNthLargest(array: number[], nth: number) {
    let param=array.map(value=>`array=${value}&`).join('')
    return this.http.get(`${this.baseUrl}highest?${param}nth=${nth}`).toPromise();
  }
}
