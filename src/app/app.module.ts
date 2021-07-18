import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import { AppComponent } from './app.component';
import { CollegeComponentComponent } from './college-component/college-component.component';
import { SchoolcomponentComponent } from './schoolcomponent/schoolcomponent.component';

import { BankComponentComponent } from './bank-component/bank-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule ],
  declarations: [ AppComponent, CollegeComponentComponent, SchoolcomponentComponent ,BankComponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
