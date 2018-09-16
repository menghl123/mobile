import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {DynamicComponent} from '../services/create-component.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'et-alert',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!context?.enableBackdropDismiss"></et-backdrop>
    <div [@trigger]="'active'" class="alert-wrapper">
      <div class="alert-head">
        <h2 class="alert-title" *ngIf="context?.title" [innerHTML]="context?.title"></h2>
      </div>
      <div class="alert-message" [innerHTML]="context?.message"></div>
      <div class="alert-button-group" [ngClass]="{\'alert-button-group-vertical\':context?.buttons?.length>2}">
        <button class="alert-button" *ngFor="let b of context?.buttons" (click)="btnClick(b)"
                [ngClass]="b.cssClass">
          {{b.text}}
        </button>
      </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('trigger', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)',
        width: 'auto'
      })),
      transition('void => active', animate('200ms ease-in')),
    ])
  ]
})
export class EtAlert implements DynamicComponent {
  @HostBinding('class.alert-md') alertMd = true;

  ok: any;
  cancel: any;
  context: any;

  btnClick(b) {
    this.ok(b);
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
}

@Component({
  selector: 'et-alert-prompt',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!context?.enableBackdropDismiss"></et-backdrop>
    <div [@trigger]="'active'" class="alert-wrapper">
      <div class="alert-head">
        <h2 class="alert-title" *ngIf="context?.title" [innerHTML]="context?.title"></h2>
      </div>
      <div class="alert-message" [innerHTML]="context?.message"></div>
      <div class="alert-input-group">
        <div *ngFor="let input of context?.inputs" class="alert-input-wrapper">
          <input type="text" [placeholder]="input?.placeholder" [(ngModel)]="input.value" class="alert-input"
                 dir="auto" [attr.id]="input?.id">
        </div>
      </div>
      <div class="alert-button-group" [ngClass]="{'alert-button-group-vertical':context?.buttons?.length>2}">
        <button class="alert-button" *ngFor="let b of context?.buttons" (click)="btnClick(b)"
                [ngClass]="b.cssClass">
          {{b.text}}
        </button>
      </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('trigger', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)',
        width: 'auto'
      })),
      transition('void => active', animate('200ms ease-in')),
    ])
  ]
})
export class EtAlertPrompt implements DynamicComponent {
  @HostBinding('class.alert-md') alertMd = true;

  ok: any;
  cancel: any;
  context: any;

  btnClick(b) {
    this.ok(b);
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
}

@Component({
  selector: 'et-alert-radio',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!context?.enableBackdropDismiss"></et-backdrop>
    <div [@trigger]="'active'" class="alert-wrapper">
      <div class="alert-head">
        <h2 class="alert-title" *ngIf="context?.title" [innerHTML]="context?.title"></h2>
      </div>
      <div *ngIf="context?.message" class="alert-message" [innerHTML]="context?.message"></div>
      <div class="alert-radio-group" role="radiogroup" [attr.aria-labelledby]="hdrId"
           [attr.aria-activedescendant]="activeId">
        <button
          class="ripple alert-tappable alert-radio disable-hover alert-radio-button alert-radio-button-md alert-radio-button-default alert-radio-button-default-md"
          *ngFor="let input of context?.inputs" (click)="rbClick(input)"
          [attr.aria-checked]="input?.checked" [disabled]="input?.disabled" [attr.id]="input?.id"
          role="radio">
          <span class="button-inner">
            
          <div class="alert-radio-icon">
            <div class="alert-radio-inner"></div>
          </div>
                        <div class="alert-radio-label">{{input?.label}}</div>
                      </span>
        </button>
      </div>
      <div class="alert-button-group" [ngClass]="{'alert-button-group-vertical':context?.buttons?.length>2}">
        <button class="alert-button" *ngFor="let b of context?.buttons" (click)="btnClick(b)"
                [ngClass]="b.cssClass">
          {{b.text}}
        </button>
      </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('trigger', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)',
        width: 'auto'
      })),
      transition('void => active', animate('200ms ease-in')),
    ])
  ]
})
export class EtAlertRadio implements DynamicComponent {
  @HostBinding('class.alert-md') alertMd = true;

  ok: any;
  cancel: any;
  context: any;
  activeId: any;
  hdrId: any;

  rbClick(inputItem: any) {
    this.context.inputs.forEach(input => {
      input.checked = (inputItem === input);
    });
    this.activeId = inputItem.id;

    if (inputItem.handler) {
      inputItem.handler(inputItem);
    }
  }

  btnClick(b) {
    this.ok(b);
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
}

@Component({
  selector: 'et-alert-checkbox',
  template: `
    <et-backdrop [hidden]="!context?.showBackdrop" (click)="bdClick()"
                 [class.backdrop-no-tappable]="!context?.enableBackdropDismiss"></et-backdrop>
    <div [@trigger]="'active'" class="alert-wrapper">
      <div class="alert-head">
        <h2 class="alert-title" *ngIf="context?.title" [innerHTML]="context?.title"></h2>
      </div>
      <div *ngIf="context?.message" class="alert-message" [innerHTML]="context?.message"></div>
      <div class="alert-checkbox-group">
      <button class="ripple alert-tappable alert-checkbox disable-hover alert-checkbox-button alert-checkbox-button-md alert-checkbox-button-default alert-checkbox-button-default-md"
              *ngFor="let input of context?.inputs" (click)="cbClick(input)" [attr.aria-checked]="input?.checked" [attr.id]="input?.id" [disabled]="input?.disabled" role="checkbox">
        <span class="button-inner">
        <div class="alert-checkbox-icon"><div class="alert-checkbox-inner"></div></div>
        <div class="alert-checkbox-label">
          {{input.label}}
          </div>
                  </span>
      </button>
      </div>
      <div class="alert-button-group" [ngClass]="{'alert-button-group-vertical':context?.buttons?.length>2}">
        <button class="alert-button" *ngFor="let b of context?.buttons" (click)="btnClick(b)"
                [ngClass]="b.cssClass">
          {{b.text}}
        </button>
      </div>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('trigger', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)',
        width: 0
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)',
        width: 'auto'
      })),
      transition('void => active', animate('200ms ease-in')),
    ])
  ]
})
export class EtAlertCheckbox implements DynamicComponent {
  @HostBinding('class.alert-md') alertMd = true;

  ok: any;
  cancel: any;
  context: any;
  activeId: any;
  hdrId: any;

  cbClick(inputItem: any) {
    this.context.inputs.forEach(input => {
      input.checked = (inputItem === input);
    });
    this.activeId = inputItem.id;

    if (inputItem.handler) {
      inputItem.handler(inputItem);
    }
  }

  btnClick(b) {
    this.ok(b);
  }

  bdClick() {
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
}
