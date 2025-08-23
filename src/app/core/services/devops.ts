import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DevopsOther } from '../../models/devops-other';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Devops {

    http = inject(HttpClient)
  devopsUrl = 'http://localhost:3000/machloudevops'

  // Get All Devops & Others
  getAllDevops():Observable<DevopsOther[]> {
    return this.http.get<DevopsOther[]>(`${this.devopsUrl}`)

  }

}
