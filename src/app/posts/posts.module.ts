import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postReducer } from "./state/posts.reducers";

const routes : Routes = [
    {path:'', component:PostsListComponent, children: [
        {path:'add', component:AddPostComponent},
        {path:'edit/:id', component:EditPostComponent}
      ]}
];
@NgModule({
    imports:[CommonModule, ReactiveFormsModule, StoreModule.forFeature('posts', postReducer), RouterModule.forChild(routes)],
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ]
})
export class PostsModule {
    
}