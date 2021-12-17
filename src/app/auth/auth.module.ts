import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponentComponent } from './login-component/login-component.component';
import { authEffects } from "./state/auth.effects";
import { authReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selector";

const routes:Routes = [
    {path:'', children: [{
        path:'', redirectTo: 'login'
    },
    {
        path:'login', component:LoginComponentComponent
    }
]}
];
@NgModule({
    imports:[CommonModule,ReactiveFormsModule,EffectsModule.forFeature([authEffects])
        , StoreModule.forFeature(AUTH_STATE_NAME, authReducer), RouterModule.forChild(routes)],
    declarations:[
    LoginComponentComponent
  ]
})
export class authModule {

}