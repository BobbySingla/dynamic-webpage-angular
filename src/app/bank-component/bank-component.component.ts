import { Component, Input, OnInit } from '@angular/core';
import {
  RxDynamicFormBuilder,
  DynamicFormBuildConfig,
  DynamicFormConfiguration
} from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

import { BANK_SERVER_DATA } from './../bank-data-json';

@Component({
  selector: 'app-bank-component',
  templateUrl: './bank-component.component.html',
  styleUrls: ['./bank-component.component.css']
})
export class BankComponentComponent implements OnInit {

  serverData: any[]= BANK_SERVER_DATA ;
  dynamicForm: DynamicFormBuildConfig;
  uiBindings: string[] = ['bankName', 'headOffice'];
  dynamicFormConfiguration: DynamicFormConfiguration;
  constructor(private dynamicFormBuilder: RxDynamicFormBuilder) {}

  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required'
      }
    });
    
    this.dynamicForm = this.dynamicFormBuilder.formGroup(
      this.serverData,
      this.dynamicFormConfiguration
    );
  }
 
  onSubmit(){
    console.log(this.dynamicForm.formGroup.value);
  }
}
