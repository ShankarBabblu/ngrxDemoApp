import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterInputComponent } from "./counter-input/counter-input.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { counterReducer } from "./state/counter.reducers";

const routes : Routes = [
    {path:'', component:CounterComponent}
]

@NgModule({
    imports : [CommonModule,FormsModule, StoreModule.forFeature('counter', counterReducer), RouterModule.forChild(routes)],
    declarations : [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterInputComponent,
    ],
})
export class CounterModule{ 
 
}