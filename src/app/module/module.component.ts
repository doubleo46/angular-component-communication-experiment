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

  constructor(private messageService: MessageService) { 
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log("INvoked");
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

  }

  ngOnInit() {
  }



}
