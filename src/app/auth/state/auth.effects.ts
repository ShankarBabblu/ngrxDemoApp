import { Injectable } from "@angular/core";
import {  Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, map } from "rxjs/operators";
import { authService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";

@Injectable()
export class authEffects {
    constructor(private actions$: Actions, private authService:authService) {}
    
    login$ = createEffect(():any => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((action) => {
            console.log(action)
            return this.authService.login(action.email, action.password).pipe(map((data:any) => {
                console.log(data)
                return loginSuccess(data);
            }))
        }))
    })

    // loginSuccess$ = createEffect()
    // @Effect
    // login2$ = this.actions$.pipe(ofType(loginStart), mergeMap((action) => {
    //     return this.authService.login(action.email, action.password).pipe(map((data:any) => {
    //         return loginSuccess(data);
    //     }));
    // })
    // );
}