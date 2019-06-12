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

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Stack Component to Module Component!');
    console.log("Send message");
}

clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
}

}
