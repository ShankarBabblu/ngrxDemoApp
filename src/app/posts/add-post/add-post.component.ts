import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { Post } from '../models/posts.models';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm! : FormGroup;

  constructor(private store : Store<appState>) { }
  onAddPost() {
    if (!this.postForm.valid){
      return;
    }
    const post : Post = {
      title: this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.store.dispatch(addPost({post}));
    console.log(this.postForm.value)
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }
  showErrors(formData : any) {
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
