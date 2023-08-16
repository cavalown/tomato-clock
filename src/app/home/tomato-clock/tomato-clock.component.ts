import { Component } from '@angular/core';

@Component({
  selector: 'app-tomato-clock',
  templateUrl: './tomato-clock.component.html',
  styleUrls: ['./tomato-clock.component.scss']
})
export class TomatoClockComponent {
  originTime:number = 1500000 // 25 minutes
  constructor(){}
  ngOnInit ():void{}

  countdownTime(){
    if(this.originTime <= 0) return
    this.originTime -1;
  }

  start(){
    if(this.originTime <= 0) return
    this.countdownTime()
    // setInterval(this.countdownTime,1000)
  }
  pause(){}
  reset(){}
  getHumanReadableTime(){
    return {
      minute: Math.floor(this.originTime / 60000),
      second: this.originTime%60000
    }
  }
}
