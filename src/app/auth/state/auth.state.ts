export interface authState {
    email : string;
    password : string;
}
export const initialState : authState = {
    email : '',
    password : ''
}