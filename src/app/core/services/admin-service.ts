import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  http = inject(HttpClient);
  adminUrl = 'http://localhost:3000/machlouadmin'

  // Login Method
  login(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>(`${this.adminUrl}log`,admin)

  }

    // Get All Admin
  getAllAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.adminUrl}`);
  }

}
