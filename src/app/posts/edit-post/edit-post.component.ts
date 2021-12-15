import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { Post } from '../models/posts.models';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  postForm! : FormGroup
  post! : Post
  constructor(private router : Router,  private store : Store<appState>, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id')
      this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data
        this.createForm()
      })
    })
    
  }
  onUpdatePost(){
    if( !this.postForm.valid){
      return;
    }
    const post : Post = {
      id : this.postForm.value.id,
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.store.dispatch(updatePost({ post })); 
    this.router.navigate(['/posts']);
  }
  createForm() {
    this.postForm = new FormGroup({
      id : new FormControl(this.post.id),
      title : new FormControl(this.post.title, [Validators.required, Validators.minLength(5)]),
      description : new FormControl(this.post.description, [Validators.required, Validators.minLength(5)])
    })
  }
  showErrors(formData:any) {
    const descriptionForm = this.postForm.get('description')
    if(formData?.touched && !formData.valid){
      if(formData?.errors?.['required']){
        return 'Data is required'
      }
      if(formData?.errors?.['minlength']){
        return 'length must be minimum 5 characters'
      }
      return null
    }
    return null
  }
}
