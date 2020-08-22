import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any; //defined property line 20
  constructor(private service: RedditService) {}

  ngOnInit(): void {
    this.searchReddit();
  }

  //because this.service.getData looks for an observable, you have to say subscribe. and call it response.
  searchReddit() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.posts = response.data.children; //this function is saying subscribe to response's data children in the console log object. then equates all of that information to the variable "posts"
    });
  }
}
