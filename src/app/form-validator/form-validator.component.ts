import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-validator',
  imports: [],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.css'
})
export class FormValidatorComponent {
  @Input() control: any;
  constructor() {}

  get errorMessage() {
    if(this.control && this.control.errors){
      const errors = this.control.errors;
      if (errors['required']) {
        return 'This field is required';
      }
      if (errors['email']) {
        return 'Please enter a valid email address';
      }
      if (errors['minlength']) {
        return `Minimum length is ${errors['minlength'].requiredLength} characters`;
      }
      if (errors['maxlength']) {
        return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
      }
    }

    return '';
  }
  
}
