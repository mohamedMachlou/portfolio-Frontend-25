import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  // Signals
  openMenuStatus = signal<boolean>(true);
  isScrolled = signal<boolean>(false);

   // Sections
  activeSection = 'home';
  sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];




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

  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }


}
