import {Component, OnInit, ViewChild} from '@angular/core';
import {EtContent} from '../../../easytune-mobile/components/content';
import {ActionSheetService} from '../../../easytune-mobile/services/action-sheet.service';
import {AlertService} from '../../../easytune-mobile/services/alert.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild(EtContent)
  private content: EtContent;

  constructor(private actionSheetService: ActionSheetService,
              private alertService: AlertService) {

  }

  doAlert(){
    this.alertService.alert().subscribe(res =>{
      debugger
    });
  }

  doAlertPrompt(){
    this.alertService.prompt().subscribe(res =>{
      debugger
    });
  }

  doAlertRadio(){
    this.alertService.checkbox().subscribe(res =>{
      debugger
    });
  }

  doActionSheet() {
    this.actionSheetService.show({
      buttons: [
        {text: '相机', icon: 'user'},
        {text: '拍照', icon: 'user'},
      ]
    } as any)
      .subscribe(res => {
      }, error => {
      });
  }

  ngOnInit() {
  }

  toTop() {
    this.content.scrollToTop();
  }

  scrollStart($event) {
    console.info(`scroll start:${$event.timeStamp}`);
  }

  scrolling($event) {
    console.info(`scroll scrolling:${$event.timeStamp}`);
  }

  scrollEnd($event) {
    console.info(`scroll end:${$event.timeStamp}`);
  }
}
