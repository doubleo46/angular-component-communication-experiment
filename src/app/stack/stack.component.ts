import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  buttonSendMessage(message): void {
    // send message to subscribers via observable subject
    if (message){
      this.messageService.sendMessage(message);
    }
    else{
      this.messageService.sendMessage("Nothing to send");
    }
}

buttonClearMessages(): void {
    // clear messages
    this.messageService.clearMessages();

}

}
