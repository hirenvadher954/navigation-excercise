import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  numberOfLikes: number = 55;
  state: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  countLikes() {
    console.log("Button State ");
    console.log(this.state);
    if (this.state) {
      this.numberOfLikes -= 1;
      this.changeState();
    }
    else {
      this.numberOfLikes += 1;
      this.changeState();
    }
  }

  changeState() {
    this.state = !this.state;

  }
}

