import { Component, Input, OnInit } from '@angular/core';
import {
  RxDynamicFormBuilder,
  DynamicFormBuildConfig,
  DynamicFormConfiguration
} from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from './server-data-json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  serverData: any[] = SERVER_DATA;
public value:any;
  dynamicForm: DynamicFormBuildConfig;
  uiBindings: string[] = ['client'];
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
    
      this.value=this.dynamicForm.formGroup.value;

  }
 

}
