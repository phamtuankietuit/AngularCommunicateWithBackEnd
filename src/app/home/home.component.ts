import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // this.getAll();
    // this.addPost();
    // this.deletePost();
    // this.updatePost();
  }

  getAll(): void {
    this.postService.getAll().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost(): void {
    this.postService
      .addPost({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  deletePost(): void {
    this.postService.deletePost(1).subscribe((data) => {
      if (data) {
        console.log('Delete post successfully');
      }
    });
  }

  updatePost(): void {
    this.postService
      .updatePost({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
