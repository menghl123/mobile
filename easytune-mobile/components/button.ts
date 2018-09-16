import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation} from '@angular/core';
import {Et} from './et';
import {isTrueProperty} from '../util/utils';

@Component({
  selector: '[et-button]',
  template: `
    <span class="button-inner ripple">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EtButton extends Et {
  _role: string = 'button'; // bar-button

  _size: string; // large/small/default

  _style: string = 'default'; // outline/clear/solid

  _shape: string; // round/fab

  _display: string; // block/full

  _decorator: string; // strong

  _init: boolean;

  @Input()
  set large(val: boolean) {
    this._attr('_size', 'large', val);
  }

  @Input()
  set small(val: boolean) {
    this._attr('_size', 'small', val);
  }

  @Input()
  set default(val: boolean) {
    this._attr('_size', 'default', val);
  }

  @Input()
  set outline(val: boolean) {
    this._attr('_style', 'outline', val);
  }

  @Input()
  set clear(val: boolean) {
    this._attr('_style', 'clear', val);
  }

  @Input()
  set solid(val: boolean) {
    this._attr('_style', 'solid', val);
  }

  @Input()
  set round(val: boolean) {
    this._attr('_shape', 'round', val);
  }

  @Input()
  set block(val: boolean) {
    this._attr('_display', 'block', val);
  }

  @Input()
  set full(val: boolean) {
    this._attr('_display', 'full', val);
  }

  @Input()
  set strong(val: boolean) {
    this._attr('_decorator', 'strong', val);
  }

  @Input()
  set mode(val: string) {
    this._assignCss(false);
    this._mode = val;
    this._assignCss(true);
  }

  _attr(type: string, attrName: string, attrValue: boolean) {
    if (type === '_style') {
      this._updateColor(this._color, false);
    }
    this._setClass((<any>this)[type], false);
    if (isTrueProperty(attrValue)) {
      (<any>this)[type] = attrName;
      this._setClass(attrName, true);

    } else {
      // Special handling for '_style' which defaults to 'default'.
      (<any>this)[type] = (type === '_style' ? 'default' : null);
      this._setClass((<any>this)[type], true);
    }
    if (type === '_style') {
      this._updateColor(this._color, true);
    }

  }

  @Input()
  set color(val: string) {
    this._updateColor(this._color, false);
    this._updateColor(val, true);
    this._color = val;

  }

  constructor(elementRef: ElementRef,
              renderer: Renderer2) {
    super(elementRef, renderer);
    this._mode = 'md';

  }

  /** @hidden */
  ngAfterContentInit() {
    this._init = true;
    this._assignCss(true);
  }

  /**
   * @hidden
   */
  setRole(val: string) {
    this._assignCss(false);
    this._role = val;
    this._assignCss(true);
  }

  /**
   * @hidden
   */
  _assignCss(assignCssClass: boolean) {
    let role = this._role;
    if (role) {
      this.setElementClass(role, assignCssClass); // button
      this.setElementClass(`${role}-${this._mode}`, assignCssClass); // button

      this._setClass(this._style, assignCssClass); // button-clear
      this._setClass(this._shape, assignCssClass); // button-round
      this._setClass(this._display, assignCssClass); // button-full
      this._setClass(this._size, assignCssClass); // button-small
      this._setClass(this._decorator, assignCssClass); // button-strong
      this._updateColor(this._color, assignCssClass); // button-secondary, bar-button-secondary
    }
  }

  /**
   * @hidden
   */
  _setClass(type: string, assignCssClass: boolean) {
    if (type && this._init) {
      type = type.toLocaleLowerCase();
      this.setElementClass(`${this._role}-${type}`, assignCssClass);
      this.setElementClass(`${this._role}-${type}-${this._mode}`, assignCssClass);
    }
  }

  /**
   * @hidden
   */
  _updateColor(color: string, isAdd: boolean) {
    if (color && this._init) {
      // The class should begin with the button role
      // button, bar-button
      let className = this._role;

      // If the role is not a bar-button, don't apply the solid style
      let style = this._style;
      style = (this._role !== 'bar-button' && style === 'solid' ? 'default' : style);

      className += (style !== null && style !== '' && style !== 'default' ? '-' + style.toLowerCase() : '');

      if (color !== null && color !== '') {
        this.setElementClass(`${className}-material-${color}`, isAdd);
      }
    }
  }
}
