import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-post-list-1',
  templateUrl: './post-list-1.component.html',
  styleUrl: './post-list-1.component.css',
  // providers: [PostService]
})
export class PostList1Component implements OnInit {

  postList: Array<any> = [];

  constructor(
    private postService: PostService
  ) {
    this.postList = postService.postList
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
