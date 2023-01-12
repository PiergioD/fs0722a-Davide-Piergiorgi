import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('data') post!:Post
  // inactPosts: Post[] = this.posts.filter(el => el.active == false)
  // actPosts: Post[] = this.posts.filter(el => el.active == true)

  constructor() { }

  ngOnInit(): void {
  }

}
