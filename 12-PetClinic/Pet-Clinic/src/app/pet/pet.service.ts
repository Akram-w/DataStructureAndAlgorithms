import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../dataModel/message';
import { MessageService } from '../services/message.service';
import { Pet } from './data-models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _baseUrl = "http://localhost:3000/pet/";
  refresh = new EventEmitter<Pet>();
  
  constructor(private http: HttpClient,
    private router: Router,
    private msgService: MessageService) {
  }

  getAllPet(): Observable<HttpResponse<Pet[]>> {
    return this.http.get<Pet[]>(this._baseUrl, { observe: 'response' })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getPet(id: number): Observable<HttpResponse<Pet>> {
    return this.http.get<Pet>(`${this._baseUrl}${id}`, { observe: 'response' })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  savePet(pet: Pet): Observable<HttpResponse<Pet>> {
    return this.http.post<Pet>(this._baseUrl, pet, { observe: 'response' })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updatePet(pet: Pet): Observable<HttpResponse<Pet>> {
    console.log(pet)
    return this.http.put<Pet>(`${this._baseUrl}${pet.id}`, pet, { observe: 'response' })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  deletePet(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(`${this._baseUrl}${id}`, { observe: 'response' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      console.log('client')
      console.log(this.msgService)
      this.msgService.addMsg(Message.MessageTypes.danger, "Couldn't connect")

    } else if(error.status===404) {
      this.msgService.addMsg(Message.MessageTypes.danger, "Couldn't find pet");
      this.router.navigate(['/'])
    }
    return throwError("Something went wrong");
  }

}
