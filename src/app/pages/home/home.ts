import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../core/services/admin-service';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
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
    downloadcv: '',
  });

  // Signals
  // isScrolled = signal<boolean>(false);
  downloadcv = signal<string>('');
  github = signal<string>('');
  linkedin = signal<string>('');
  instagram = signal<string>('');

  ngOnInit(): void {
    // Load admins
    this.adminService.getAllAdmins().subscribe((admins) => {
      this.admin.set(admins[0]);

      // Get Social Links
      this.downloadcv.set(this.admin().downloadcv!);
      this.github.set(this.admin().github!);
      this.linkedin.set(this.admin().linkedin!);
      this.instagram.set(this.admin().instagram!);
    });


  }

  // Start Scroll Vers Section spécifique
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // End Scroll Vers Section spécifique

  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
