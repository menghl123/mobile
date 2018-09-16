import {EventEmitter, Injectable,} from '@angular/core'
import {EtCreateComponentService} from './create-component.service';
import {EtAlert, EtAlertCheckbox, EtAlertPrompt, EtAlertRadio} from '../components/alert';
import {extend} from '../util/utils';

export interface EtButtonOption {
  text?: string;
  role?: string;
  code?: number;
  cssClass?: string;
}

export interface AlertOption {
  cancelButton?: EtButtonOption,
  buttons?: EtButtonOption[],
  title?: string,
  message?: string,
  enableBackdropDismiss?: true,
  showBackdrop?: boolean,
  cssClass?: string
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private etCreateComponentService: EtCreateComponentService) {
  }

  public prompt(option?) {
    const defaultOption = this.getAlertPromptDefaultOption()

    if (option) {
      extend(defaultOption, option);
    }

    const dimiss = new EventEmitter<any>();
    this.etCreateComponentService.createCom(EtAlertPrompt, dimiss, defaultOption);
    return dimiss;
  }

  public radio(option?) {
    const defaultOption = this.getAlertRadioDefaultOption()

    if (option) {
      extend(defaultOption, option);
    }

    const dimiss = new EventEmitter<any>();
    this.etCreateComponentService.createCom(EtAlertRadio, dimiss, defaultOption);
    return dimiss;
  }

  public checkbox(option?) {
    const defaultOption = this.getAlertRadioDefaultOption()

    if (option) {
      extend(defaultOption, option);
    }

    const dimiss = new EventEmitter<any>();
    this.etCreateComponentService.createCom(EtAlertCheckbox, dimiss, defaultOption);
    return dimiss;
  }

  public alert(option?) {
    const defaultOption = this.getAlertDefaultOption()

    if (option) {
      extend(defaultOption, option);
    }

    const dimiss = new EventEmitter<any>();
    this.etCreateComponentService.createCom(EtAlert, dimiss, defaultOption);
    return dimiss;
  }

  getAlertDefaultOption() {
    return {
      title: '提示',
      enableBackdropDismiss: true,
      message: '确认操作？',
      buttons: [{
        text: '确认',
        role: 'cancel',
        code: 1
      }],
      showBackdrop: true,
    };
  }

  getAlertPromptDefaultOption() {
    return {
      title: '提示',
      enableBackdropDismiss: true,
      message: '请输入',
      inputs: [{
        placeholder: '输入...',
      }],
      buttons: [{
        text: '确认',
        role: 'cancel',
        code: 1
      }],
      showBackdrop: true,
    };
  }

  getAlertRadioDefaultOption() {
    return {
      title: '提示',
      enableBackdropDismiss: true,
      inputs: [{
        label: 'red',
        id: 'red',
      },
        {
          label: 'blue',
          id: 'blue',
        }, {
          label: 'yellow',
          id: 'yellow',
        }],
      buttons: [{
        text: '确认',
        role: 'cancel',
        code: 1
      }],
      showBackdrop: true,
    };
  }

}
