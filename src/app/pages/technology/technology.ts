import { Component, inject, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgrammingLanguage } from '../../core/services/programming-language';
import { Devops } from '../../core/services/devops';
import { ProgLang } from '../../models/prog-lang';
import { DevopsOther } from '../../models/devops-other';
import { FrameworkService } from '../../core/services/framework-service';
import { Framework } from '../../models/framework';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
  styleUrl: './technology.css'
})
export class Technology implements OnInit {

    // Injection
    router = inject(Router);

    // Services
    progLangServices = inject(ProgrammingLanguage)
    frameworkService = inject(FrameworkService)
    desvopsService = inject(Devops)

      // Signals
  openMenuStatus = signal<boolean>(true);
  isScrolled = signal<boolean>(false);
  progLanguages = signal<ProgLang[]>([]);
  backends = signal<Framework[]>([]);
  allDevops = signal<DevopsOther[]>([]);

  // Ng OnInit
  ngOnInit(): void {

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

  }



}
