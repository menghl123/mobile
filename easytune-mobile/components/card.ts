import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-card',
  template: `
    <ng-content ></ng-content> `,
})
export class EtCard {
  @HostBinding('class.card') native = true;
  @HostBinding('class.card-md') nativeMd = true;
}

@Component({
  selector: 'et-card-header',
  template: `
    <ng-content ></ng-content> `,
})
export class EtCardHeader {
  @HostBinding('class.card-header') native = true;
  @HostBinding('class.card-header-md') nativeMd = true;
}

@Component({
  selector: 'et-card-content',
  template: `
    <ng-content ></ng-content> `,
})
export class EtCardContent {
  @HostBinding('class.card-content') native = true;
  @HostBinding('class.card-content-md') nativeMd = true;
}

@Component({
  selector: 'et-card-content',
  template: `
    <ng-content ></ng-content> `,
})
export class EtCardTitle {
  @HostBinding('class.card-title') native = true;
  @HostBinding('class.card-title-md') nativeMd = true;
}

