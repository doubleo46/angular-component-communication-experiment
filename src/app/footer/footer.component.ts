import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  noOfMessages:number;
  subscription: Subscription;

  constructor(private messageService:MessageService) { 
    this.subscription = messageService.getMessageCount().subscribe(value=>{
      this.noOfMessages = value["count"];


    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
