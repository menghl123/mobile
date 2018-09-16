import {EventEmitter, Injectable,} from '@angular/core'
import {EtCreateComponentService} from './create-component.service';
import {extend} from '../util/utils';
import {EtActionSheets} from '../components/actionsheets';
import {EtButtonOption} from './alert.service';


export interface ActionSheetOption {
  cancelButton?: EtButtonOption,
  buttons?: EtButtonOption[],

  message?: string;
  title?: string,
  enableBackdropDismiss?: true,
  showBackdrop?: boolean,
  cssClass?: string
}

@Injectable({
  providedIn: 'root',
})
export class ActionSheetService {
  constructor(private etCreateComponentService: EtCreateComponentService) {
  }

  show(option ?: ActionSheetOption) {
    const defaultOption = this.getDefaultOption()

    if (option) {
      extend(defaultOption, option);
    }
    const dimiss = new EventEmitter<any>();
    this.etCreateComponentService.createCom(EtActionSheets, dimiss, defaultOption);
    return dimiss;
  }

  getDefaultOption() {
    return {
      title: '选择',
      enableBackdropDismiss: true,
      buttons: [],
      cancelButton: {
        text: '取消',
        role: 'cancel',
        code: 0
      },
      showBackdrop: true,
    };
  }


}
