import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EasytuneMobileModule} from '../../../easytune-mobile/easytune.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EasytuneMobileModule
  ],
  declarations: [],
  exports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EasytuneMobileModule
  ]
})
export class SharedModule {
}
