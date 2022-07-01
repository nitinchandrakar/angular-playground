import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private subject = new Subject();
  message$:Observable<any> = this.subject.asObservable();
  
  constructor() { }

  sendMessage(params:any){
    this.subject.next(params);
  }


}
