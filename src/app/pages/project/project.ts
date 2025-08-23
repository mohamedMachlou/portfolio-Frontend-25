import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

  


  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

}
