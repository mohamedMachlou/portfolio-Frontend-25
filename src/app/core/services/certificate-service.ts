import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mycertificate } from '../../models/mycertificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  http = inject(HttpClient);
  certificateUrl = 'http://localhost:3000/machloucertificate';

  // Get All Certificates
  getAllCertificates(): Observable<Mycertificate[]> {
    return this.http.get<Mycertificate[]>(`${this.certificateUrl}`);
  }
}
