import { Component, Input, OnInit } from '@angular/core';
import {
  RxDynamicFormBuilder,
  DynamicFormBuildConfig,
  DynamicFormConfiguration
} from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

import { COLLEGE_SERVER_DATA } from './../college-data-json';

@Component({
  selector: 'app-college-component',
  templateUrl: './college-component.component.html',
  styleUrls: ['./college-component.component.css']
})
export class CollegeComponentComponent implements OnInit {

  serverData: any[]= COLLEGE_SERVER_DATA ;
  dynamicForm: DynamicFormBuildConfig;
  uiBindings: string[] = ['collegeName', 'dateOfAffiliation'];
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
