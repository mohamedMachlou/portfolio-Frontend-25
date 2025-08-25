import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { AdminService } from '../../core/services/admin-service';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Services
  adminService = inject(AdminService);

  // Signals
   admin = signal<Admin>({
    firstName: '',
    lastName: '',
    description: '',
    diplome: '',
    jobTitle: '',
    experience: '',
    specialty: '',
    addresse: '',
    email: '',
    password: '',
    phone: '',
    freelance: '',
    linkedin: '',
    github: '',
    facebook: '',
    instagram: '',
    twitter: '',
    photo: '',
    downloadcv: '',
  });

  // Formulaire
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,6}$'),
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
    this.admin.update(a => ({ ...a, email: this.email?.value || '' }));
    this.admin.update(a => ({ ...a, password: this.password?.value || '' }));

    this.adminService.login(this.admin()).subscribe((res) => {
      console.log('response : ', res)
    })
  }
}
