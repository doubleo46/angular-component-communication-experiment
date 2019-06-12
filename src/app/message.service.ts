import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private subject = new Subject<any>();
  private countSubject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();

  }

  sendMessageCount(count: number) {
    this.countSubject.next({ count: count });
}

  getMessageCount(): Observable<any> {
    return this.countSubject.asObservable();

  }
}
