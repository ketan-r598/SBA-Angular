import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  toDo(msg:string) {
    console.log(msg);
  }
}
