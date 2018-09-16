import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'et-title',
  template: `
    <div class="toolbar-title toolbar-title-md">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EtToolbarTitle {
  @HostBinding('class.title') titleClass = true;
  @HostBinding('class.title-md') titleClassMd = true;

}
