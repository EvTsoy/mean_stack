import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      id: null,
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

  getErrorMessage() {
  }

}
