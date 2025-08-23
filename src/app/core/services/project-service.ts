import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Myproject } from '../../models/myproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  http = inject(HttpClient)
  projectUrl = 'http://localhost:3000/machlouproject'

  // Get All Projects
  getAllProjects():Observable<Myproject[]> {
    return this.http.get<Myproject[]>(`${this.projectUrl}`)

  }


}
