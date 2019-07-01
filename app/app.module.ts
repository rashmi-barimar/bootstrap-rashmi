import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BladeComponent } from './blade.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './examples/popup-modal/popup-modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , NgbModule.forRoot()],
  declarations: [ AppComponent, PopupModalComponent, BladeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
