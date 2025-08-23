import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../core/services/project-service';
import { Myproject } from '../../models/myproject';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class Project implements OnInit {

    // Injection
  router = inject(Router);

  // Services
  projectService = inject(ProjectService);

  // Signals
  allProjects = signal<Myproject[]>([]);
  projectUrl = signal<string>('http://localhost:3000/projectphoto/');


// Ng OnInit
ngOnInit(): void {


    // Load Projects
    this.projectService.getAllProjects().subscribe((projects) => {
      this.allProjects.set(projects)
      console.log('MyPj',this.allProjects())
    })

}


  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }


  encodeFileName(fileName: string | null): string {
  return fileName ? encodeURIComponent(fileName) : '';
}


}
