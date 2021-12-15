import { counterState } from './../counter/state/counter.state'
import { counterReducer } from './../counter/state/counter.reducers'
import { postsState } from './../posts/state/posts.state'
import { postReducer } from './../posts/state/posts.reducers'

export interface appState {
    counter : counterState,
    posts : postsState
}

export const appReducer = {
    counter : counterReducer,
    posts : postReducer
}