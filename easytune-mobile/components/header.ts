import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-header',
  template: `
    <ng-content ></ng-content> `,
})
export class EtHeader {
  @HostBinding('class.header') header = true;
  @HostBinding('class.header-md') headerMd = true;
}
