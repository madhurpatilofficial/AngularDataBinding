import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  template: `
    <p>
      one-way works!
    </p>
    <h1>{{username}}</h1>
  `,
  styles: [
  ]
})
export class OneWayComponent implements OnInit {
  username = "Madhur";

  constructor() { }

  ngOnInit(): void {
  }

}
