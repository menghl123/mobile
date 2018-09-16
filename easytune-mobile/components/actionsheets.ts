import {Component, HostBinding} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DynamicComponent} from '../services/create-component.service';
import {ActionSheetOption} from '../services/action-sheet.service';

@Component({
  selector: 'et-action-sheet',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!enableBackdropDismiss"></et-backdrop>
    <div [@upDownAnimation]="'active'" class="action-sheet-wrapper">
      <div class="action-sheet-container">
        <div class="action-sheet-group">
          <div class="action-sheet-title">选择</div>
          <button *ngFor="let button of context?.buttons" (click)="click(button)"
                  class="disable-hover action-sheet-button action-sheet-button-md
action-sheet-button-default action-sheet-button-default-md action-sheet-destructive" [ngClass]="button?.cssClass">
            <i style="width: 20px" *ngIf="button?.icon" class="fa fa-{{button?.icon}}"></i>
            {{button?.text}}
          </button>
        </div>
        <div class="action-sheet-group action-sheet-group-cancel">

          <button (click)="cancelClick(cancelButton)"
                  class="action-sheet-cancel disable-hover action-sheet-button 
action-sheet-button-md action-sheet-button-default action-sheet-button-default-md"
                  [ngClass]="context?.cancelButton?.cssClass">
            {{context?.cancelButton?.text}}
          </button>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('upDownAnimation', [
      state('inactive', style({
        transform: ' translateY(100%)'
      })),
      state('active', style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('void => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class EtActionSheets implements DynamicComponent {
  ok: any;
  cancel: any;
  @HostBinding('class.action-sheet-md') header = true;
  @HostBinding('class.action-sheets-basic-page') headerMd = true;

  context: ActionSheetOption;

  cancelClick(cancelButton) {
    this.cancel(cancelButton);
  }

  click(button) {
    this.ok(button);
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
}
