import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form-component',
  standalone: false,
  templateUrl: './user-form-component.component.html',
  styleUrl: './user-form-component.component.css'
})
export class UserFormComponentComponent {
  user = {
    name: '',
    email: '',
    terms: false,
    comments: '',
    gender: '',
    skills: [] as string[],
    birthdate: ''
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data:', this.user);
    }
  }

  setFormValues() {
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      terms: true,
      comments: 'No comments',
      gender: 'Male',
      skills: ['Angular', 'JavaScript'],
      birthdate: '1990-01-01'
    };
  }
  patchFormValues(form: any) {
    form.patchValue({
      name: 'Patched Name',
      email: 'patched@example.com'
    });
  }

    resetForm(form: any) {
      form.resetForm();
      this.submitted = false;
    }
}
