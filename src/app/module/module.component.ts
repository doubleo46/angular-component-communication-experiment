import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;
  noOfMessage:number;

  constructor(private messageService: MessageService) { 
    this.noOfMessage=0;
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.noOfMessage += 1;


      } else {
        // clear messages when empty message received
        this.messages = [];
        this.noOfMessage = 0;

      }
      this.messageService.sendMessageCount(this.noOfMessage);

    });

  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
