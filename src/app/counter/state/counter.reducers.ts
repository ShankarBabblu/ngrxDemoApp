import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { changeChannelName, customInput, decrement, increment, reset } from "./counter.actions"
import { initalState } from "./counter.state"

const _counterReducer = createReducer(initalState,
    on(increment, (state) => {
    return {
        ...state,
        counter : state.counter + 1, 
    }
}),
    on(decrement, (state) => {
        return {
            ...state, 
            counter : state.counter - 1.
        }
}),
on(reset, (state) => {
    return {
        ...state,
        counter : 0
    }
}),
on(customInput, (state, action) => {
    // console.log(action.value)
    return {
        ...state,
        counter: state.counter + action.value
    }
}),
on(changeChannelName, (state, action) => {
    return {
        ...state,
        channelName : action.channelName
    }
})
)

export function counterReducer(state:any, action:any) {
    return _counterReducer(state, action)
}