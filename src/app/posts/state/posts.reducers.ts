import { createReducer, on } from "@ngrx/store"
import { addPost, deletePost, updatePost } from "./posts.actions"
import { initialState } from "./posts.state"

const _postReducer = createReducer(initialState, on(addPost, (state, action) => {
    let post = {...action.post};
    post.id = (state.posts.length + 1)
    console.log(post)
    return {
        ...state,
        posts : [...state.posts, post],
    };
}),on(updatePost, (state, action) => {
    // let post = {...action.post};
    const updatedPost = state.posts.map((postData) => {
        return action.post.id === postData.id ? action.post : postData;
    })
    return {
        ...state,
        posts : updatedPost,
    }
}), on(deletePost, (state, {id}) => {
    const updatedPosts = state.posts.filter(post => {
        return post.id !== id
    })
    return {
        ...state,
        posts : updatedPosts
    }
})
)

export function postReducer(state:any, action:any) {
    return _postReducer(state,action)
}