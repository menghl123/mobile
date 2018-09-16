import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-toolbar',
  template: `
    <div class="toolbar-background toolbar-background-md" ></div>
    <ng-content select="[menuToggle],et-buttons[left]"></ng-content>
    <ng-content select="et-buttons[start]"></ng-content> 
    <ng-content select="et-buttons[end]et-buttons[right]"></ng-content>
    <div class="toolbar-content toolbar-content-md">
      <ng-content></ng-content>
    </div>`,
})
export class EtToolBar {
  @HostBinding('class.toolbar') toolbarClass = true;
  @HostBinding('class.toolbar-md') toolbarMdClass = true;
}
