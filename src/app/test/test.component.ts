import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


  message:string="This is our message for the SBA test!";

  constructor(
    private service:MyServiceService
  ) {}
  
  onSubmit() {
    this.service.toDo(this.message);
  }
}
