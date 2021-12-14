import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customInput } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  value!: number;
  channelName!: string;
  channel!:string ;

  constructor(private store: Store<{counter : counterState}>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(channelname => {
      this.channelName = channelname
    })
  }
  onAdd() {
    this.store.dispatch(customInput({ value : this.value}));
  }
  changeChannelName() {
    this.store.dispatch(changeChannelName({channelName : this.channel}));
  }
}
