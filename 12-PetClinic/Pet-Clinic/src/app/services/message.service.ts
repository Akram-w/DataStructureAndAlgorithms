import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../dataModel/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgSource = new Subject<Message>();

  msges$ = this.msgSource.asObservable();

  /**
   * function to add msges to show as notification
   * @param type string type of the message
   * @param msg string message to show
   */
  addMsg(type: string, msg: string) {
    this.msgSource.next(new Message(type, msg));
  }
}
