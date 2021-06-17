import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {  Subscription } from 'rxjs';
import { Message } from './dataModel/message';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Pet-Clinic';
  messages$!: Subscription;

  constructor(private _snackBar: MatSnackBar,
    private msgService: MessageService) { }

  ngOnInit(): void {
    this.messages$ = this.msgService.msges$.subscribe(message => {
      this.showMessage(message)
    })
  }

  /**
   * function to show notification in snackbar
   * @param msg Message which has msg css class name as type and message to be showed
   */
  showMessage(msg: Message) {
    this._snackBar.open(msg.message, 'Close', {
      horizontalPosition: "end",
      verticalPosition: 'top',
      duration: 2000,
      panelClass: [msg.type]
    });
  }
}
