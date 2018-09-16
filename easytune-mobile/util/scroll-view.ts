import {EventEmitter} from '@angular/core';
import {interval, Subscription, timer} from 'rxjs/index';

export class ScrollView {
  timestamp = 0;
  scrolling: EventEmitter<any>;
  scrollEnd: EventEmitter<any>;
  scrollStart: EventEmitter<any>;
  fps = 60;

  listenIfEndSubscription: Subscription;

  constructor(scrollStart, scrolling, scrollEnd) {
    this.scrolling = scrolling;
    this.scrollEnd = scrollEnd;
    this.scrollStart = scrollStart;

  }

  doScroll(event) {
    if (!event) {
      return;
    }
    const nowTimeStamp = event.timeStamp;

    if (this.timestamp === 0) {
      this.scrollStart.emit(event);
      this.timestamp = nowTimeStamp;
      return;
    }
    if ((nowTimeStamp - this.timestamp) < this.fps) {
      this.scrolling.emit(event);
      this.timestamp = nowTimeStamp;
      this.timerToScrollEnd(event);
      return;
    }
  }

  timerToScrollEnd(event) {
    if (this.listenIfEndSubscription) {
      this.listenIfEndSubscription.unsubscribe();
      this.listenIfEndSubscription = null;
    }
    this.listenIfEndSubscription = timer(200).subscribe(() => {
      this.scrollEnd.emit(event);
      this.timestamp = 0;
    })
  }

}
