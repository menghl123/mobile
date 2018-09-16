import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-footer',
  template: `
    <ng-content ></ng-content> `,
})
export class EtFooter {
  @HostBinding('class.footer') footer = true;
}
