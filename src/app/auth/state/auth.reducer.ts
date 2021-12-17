import { createReducer } from "@ngrx/store";
import { initalState } from "src/app/counter/state/counter.state";

const _authReducer = createReducer(initalState)
export function authReducer(state:any, action:any) {
    return _authReducer(state, action);
}