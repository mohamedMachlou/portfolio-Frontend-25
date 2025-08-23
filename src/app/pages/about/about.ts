import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../core/services/admin-service';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {

    // Injection
  router = inject(Router);

  // Services
  adminService = inject(AdminService);


  // Variables
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
  downloadcv: ''
});

// Ng OnInit
ngOnInit(): void {

   // Load admins
    this.adminService.getAllAdmins().subscribe(admins => {
      this.admin.set(admins[0]);
    });
    
}



}
