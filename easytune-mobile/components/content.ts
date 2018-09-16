import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import {ScrollView} from '../util/scroll-view';
import {interval} from 'rxjs/index';

@Component({
  selector: 'et-content',
  template: `
    <div class="fixed-content" #fixedContent>
      <ng-content select="[et-fixed],et-fab"></ng-content>
    </div>
    <div class="scroll-content" #scrollContent (scroll)="onContentScroll($event)">
      <ng-content></ng-content>
    </div>
    <ng-content select="et-refresher"></ng-content> `,
})
export class EtContent implements OnDestroy, AfterViewInit {
  @HostBinding('class.has-refresher')
  public hasRefresher() {
    return this._hasRefresher;
  }

  _top;
  _bottom;
  _hasRefresher: boolean = false;
  _scrollView: ScrollView;

  @ViewChild('fixedContent') _fixedContent: ElementRef;
  @ViewChild('scrollContent') _scrollContent: ElementRef;

  // 内容正在滑动
  @Output()
  public scrolling: EventEmitter<any> = new EventEmitter();
  // 滑动结束
  @Output()
  public scrollEnd: EventEmitter<any> = new EventEmitter();
  // 开始滑动
  @Output()
  public scrollStart: EventEmitter<any> = new EventEmitter();

  scrollToTop(duration?: number) {
    const subscription = interval(duration || 20).subscribe(() => {
      console.log('...')
      this.getScrollElement().scrollTop = this.getScrollElement().scrollTop * 0.9;
      if (this.getScrollElement().scrollTop < 10) {
        this.getScrollElement().scrollTop = 0;
        subscription.unsubscribe();
      }
    })
  }

  getScrollElement(): HTMLElement {
    return this._scrollContent.nativeElement;
  }

  getFixedElement(): HTMLElement {
    return this._fixedContent.nativeElement;
  }

  onContentScroll(event) {
    this._scrollView.doScroll(event);
  }

  constructor(private elementRef: ElementRef) {
    this._scrollView = new ScrollView(this.scrollStart, this.scrolling, this.scrollEnd);
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    this.initContentHeight();
  }

  private initContentHeight(){
    const parent = this.elementRef.nativeElement.parentElement;
    for (let child of parent.childNodes) {
      if (child.tagName === 'ET-HEADER') {
        this._top = child.clientHeight;
      }
      if (child.tagName === 'ET-FOOTER') {
        this._bottom = child.clientHeight;
      }
    }
    if (this._top) {
      this.getScrollElement().style.marginTop = this._top + 'px';
      this.getFixedElement().style.marginTop = this._top + 'px';

    }
    if (this._bottom) {
      this.getScrollElement().style.marginBottom = this._bottom + 'px';
      this.getFixedElement().style.marginBottom = this._bottom + 'px';
    }
  }

}
