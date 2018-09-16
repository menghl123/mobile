import {NgModule} from '@angular/core';
import {EtContent} from './components/content';
import {EtHeader} from './components/header';
import {EtToolBar} from './components/toolbar';
import {EtFooter} from './components/footer';
import {EtToolbarTitle} from './components/toolbar-title';
import {EtToolbarItem} from './components/toolbar-item';
import {EtLoading} from './components/loading';
import {EtBackdrop} from './components/backdrop';
import {EtActionSheets} from './components/actionsheets';
import {EtButton} from './components/button';
import {CommonModule} from '@angular/common';
import {EtAlert, EtAlertCheckbox, EtAlertPrompt, EtAlertRadio} from './components/alert';
import {FormsModule} from '@angular/forms';
import {EtCard, EtCardContent, EtCardHeader, EtCardTitle} from './components/card';


@NgModule({
  declarations: [
    EtContent,
    EtHeader,
    EtToolBar,
    EtFooter,
    EtToolbarTitle,
    EtToolbarItem,
    EtLoading,
    EtBackdrop,
    EtActionSheets,
    EtButton,
    EtAlert,
    EtAlertPrompt,
    EtAlertRadio,
    EtAlertCheckbox,
    EtCard,
    EtCardHeader,
    EtCardContent,
    EtCardTitle
  ],
  imports: [CommonModule,FormsModule],
  providers: [],
  exports: [
    EtContent,
    EtHeader,
    EtToolBar,
    EtFooter,
    EtToolbarTitle,
    EtToolbarItem,
    EtLoading,
    EtBackdrop,
    EtActionSheets,
    EtButton,
    EtAlert,
    EtAlertPrompt,
    EtAlertRadio,
    EtAlertCheckbox,
    EtCard,
    EtCardHeader,
    EtCardContent,
    EtCardTitle
  ],
  entryComponents:[
    EtLoading,
    EtActionSheets,
    EtAlert,
    EtAlertPrompt,
    EtAlertRadio,
    EtAlertCheckbox
  ]
})
export class EasytuneMobileModule {
}
