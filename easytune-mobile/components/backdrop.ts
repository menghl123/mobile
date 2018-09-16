import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'et-backdrop',
  template: `
    <ng-content></ng-content> `,
})
export class EtBackdrop {
  constructor(private _elementRef: ElementRef) {
  }

  getNativeElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

}
