import {EventEmitter, Injectable,} from '@angular/core'
import {EtCreateComponentService} from './create-component.service';
import {EtLoading} from '../components/loading';
import {extend} from '../util/utils';

export interface EtLoadingOption {
  showBackdrop?: boolean;
  enableBackdropDismiss?: boolean;
  content?: boolean;
  showSpinner?: boolean,
}

@Injectable({
  providedIn: 'root',
})
export class EtLoadingService {
  count = 0;

  private defaultOption = {
    showBackdrop: true,
    enableBackdropDismiss: false,
    showSpinner: true,
    content: 'Please wait...'
  }as any;

  component: any;

  constructor(private etCreateComponentService: EtCreateComponentService) {
  }

  show(option ?: EtLoadingOption) {
    this.count++;
    if (this.component) {
      return;
    }
    if (option) {
      extend(this.defaultOption, option);
    }
    const dimiss = new EventEmitter<any>();
    if (!this.component) {
      this.component = this.etCreateComponentService.createCom(EtLoading, dimiss, this.defaultOption);
    }
    return dimiss;
  }

  hidden() {
    this.count--;
    if (this.component && this.count === 1) {
      this.etCreateComponentService.destroy(this.component);
    }
  }
}
