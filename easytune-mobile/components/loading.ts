import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {DynamicComponent} from '../services/create-component.service';

export interface LoadingOptions {
  spinner?: string;
  content?: string;
  showBackdrop?: boolean;
  enableBackdropDismiss?: boolean;
}

@Component({
  selector: 'et-loading',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!context?.enableBackdropDismiss"></et-backdrop>
    <div class="loading-wrapper">
      <div *ngIf="context?.showSpinner" class="loading-spinner">
        <div class="loading"></div>
      </div>
      <div [innerHTML]="context?.content" class="loading-content"></div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class EtLoading implements DynamicComponent, OnInit {
  @HostBinding('class.loading-md') public classLoadingMd = true;

  ok: any;
  cancel: any;
  context: {
    showBackdrop: true;
    enableBackdropDismiss: false;
    showSpinner: true;
    content: string
  };

  ngOnInit(): void {
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }

}
