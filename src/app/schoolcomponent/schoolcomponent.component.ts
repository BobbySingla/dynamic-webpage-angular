import { SCHOOL_SERVER_DATA } from './../school-data-json';
import { Component, Input, OnInit } from '@angular/core';
import {
  RxDynamicFormBuilder,
  DynamicFormBuildConfig,
  DynamicFormConfiguration
} from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-schoolcomponent',
  templateUrl: './schoolcomponent.component.html',
  styleUrls: ['./schoolcomponent.component.css']
})
export class SchoolcomponentComponent implements OnInit {

  serverData: any[]= SCHOOL_SERVER_DATA ;
  dynamicForm: DynamicFormBuildConfig;
  uiBindings: string[] = ['schoolName', 'listOfBranches'];
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
