import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/post.interface';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  @Output() statusChange = new EventEmitter<boolean>();

  posts: Post[] = this.postService.posts;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  gimmeFalse() {
    this.statusChange.emit(false)
  }
}
