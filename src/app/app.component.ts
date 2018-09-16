import {Component} from '@angular/core';
import {EtLoadingService} from '../../easytune-mobile/services/loading.service';
import {EtCreateComponentService} from '../../easytune-mobile/services/create-component.service';
import {EtActionSheets} from '../../easytune-mobile/components/actionsheets';
import {ActionSheetService} from '../../easytune-mobile/services/action-sheet.service';

@Component({
  selector: 'et-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private etLoadingService: EtLoadingService,
              private actionSheetService: ActionSheetService,
              private etCreateComponentService: EtCreateComponentService) {

  }
}
