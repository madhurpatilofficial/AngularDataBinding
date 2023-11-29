import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
    <p>
      two-way works!
    </p>
    Enter User Name: <input type="text" [(ngModel)] = "username">
    <h1>User Name is : {{username}}</h1>
  `,
  styles: [
  ]
})
export class TwoWayComponent implements OnInit {
  username = "";

  constructor() { }

  ngOnInit(): void {
  }

}
