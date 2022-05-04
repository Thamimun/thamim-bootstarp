import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public checkboxGroupForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.checkboxGroupForm = formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }
}
