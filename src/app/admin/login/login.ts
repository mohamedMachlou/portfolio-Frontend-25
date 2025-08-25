import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Formulaire
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,6}$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(100),

    ]),
  });

  // Accesseurs
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  // login Method
  login() {
    console.log('user', this.email?.value);
    console.log('pass', this.password?.value);
  }

  isvalid(){
    console.log('status : ',this.email?.errors)
  }
}
