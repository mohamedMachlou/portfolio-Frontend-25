import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Admin {

    http = inject(HttpClient);
  adminUrl = 'http://localhost:3000/machlouadmin'


  // Get All Admin
getAllAdmins(): Observable<Admin[]>{
  return this.http.get<Admin[]>(`${this.adminUrl}`);
}

}
