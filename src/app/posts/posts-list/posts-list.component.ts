import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { Post } from '../models/posts.models';
import { deletePost, DELETE_POST_ACTION } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$! : Observable<Post[]>;

  constructor(private store : Store<appState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
    // console.log(this.posts$)
  }
  onDeletePost(id:string) {
    if(confirm("Are you sure you want to delete")) {
      console.log('delete')
      this.store.dispatch(deletePost({ id }));
    }
  }

}
