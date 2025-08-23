import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProgrammingLanguage } from '../../core/services/programming-language';
import { Devops } from '../../core/services/devops';
import { ProgLang } from '../../models/prog-lang';
import { DevopsOther } from '../../models/devops-other';
import { AdminService } from '../../core/services/admin-service';
import { Admin } from '../../models/admin';
import { NgClass } from '@angular/common';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Home } from '../../pages/home/home';
import { About } from '../../pages/about/about';
import { Technology } from '../../pages/technology/technology';
import { FrameworkService } from '../../core/services/framework-service';
import { Framework } from '../../models/framework';
import { Project } from '../../pages/project/project';
import { Certificate } from '../../pages/certificate/certificate';
import { Contact } from '../../pages/contact/contact';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, NavBar, Home, About, Technology, Project, Certificate, Contact],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  // Injection
  router = inject(Router);

  // Services
  adminService = inject(AdminService);
  progLangServices = inject(ProgrammingLanguage)
  frameworkService = inject(FrameworkService)
  desvopsService = inject(Devops)

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


  // Signals
  openMenuStatus = signal<boolean>(true);
  isScrolled = signal<boolean>(false);
  downloadcv = signal<string>('');
  github = signal<string>('');
  linkedin = signal<string>('');
  instagram = signal<string>('');
  progLanguages = signal<ProgLang[]>([]);
  backends = signal<Framework[]>([]);
  allDevops = signal<DevopsOther[]>([]);

  // Sections
  activeSection = 'home';
  sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];


// Ng OnInit
ngOnInit(): void {

    // Load admins
    this.adminService.getAllAdmins().subscribe(admins => {
      this.admin.set(admins[0]);
    });

    // Load Programming Languages
    this.progLangServices.getAllProgLanguages().subscribe((prog_lang) => {
      this.progLanguages.set(prog_lang)
    })

    // Load Backend Frameworks & Outils
    this.frameworkService.getAllFrameworks().subscribe((backend_Outil) => {
      this.backends.set(backend_Outil)
    })

    // Load Devops
    this.desvopsService.getAllDevops().subscribe((devops) => {
      this.allDevops.set(devops)
    })


    // Get Social Links
    this.downloadcv.set(this.admin().downloadcv!);
    this.github.set(this.admin().github!);
    this.linkedin.set(this.admin().linkedin!);
    this.instagram.set(this.admin().instagram!);

}


  // Détecter scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);

    for (let section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const topOffset = 100;
        if (rect.top <= topOffset && rect.bottom >= topOffset) {
          this.activeSection = section;
          break;
        }
      }
    }
  }


  // Start Scroll Vers Section spécifique
  scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
}
  // End Scroll Vers Section spécifique




  // Start Open and Close Menu
  switchMenu() {
    this.openMenuStatus.set(!this.openMenuStatus());
    console.log('switch status to : ', this.openMenuStatus());
  }

  closeMenu() {
    this.openMenuStatus.set(false);
  }
  // End Open and Close Menu

  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

}
