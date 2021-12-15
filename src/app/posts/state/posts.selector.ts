import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./posts.state";

const getPostState = createFeatureSelector<postsState>('posts');

export const getPosts = createSelector(getPostState, state => {
    return state.posts
});
export const getPostById = createSelector(getPostState, (state:any, props:any) => {
    // console.log(props.id)
    return state.posts.find((post:any) => post.id === props.id)
})