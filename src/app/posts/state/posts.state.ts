import { Post } from './../models/posts.models'
export interface postsState {
    posts : Post[];
}


export const initialState : postsState = {
    posts : [
        {id: '1', title: 'sample title 1', description : 'Sample description 1'},
        {id: '2', title: 'sample title 2', description : 'Sample description 2'},
    ],
};