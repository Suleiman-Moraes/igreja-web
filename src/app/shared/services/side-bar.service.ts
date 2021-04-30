import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private subject = new BehaviorSubject<any>(null);

  constructor() { }

  sendData(data: any): void {
    this.subject.next(data);
  }

  getData() {
    return this.subject;
  }
}
