import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../dataModel/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgSource = new Subject<Message>();

  msges$ = this.msgSource.asObservable();

  addMsg(type: string, msg: string) {
    this.msgSource.next(new Message(type, msg));
  }
}
