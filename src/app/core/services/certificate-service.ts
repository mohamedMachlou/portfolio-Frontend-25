import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Framework } from '../../models/framework';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {

    http = inject(HttpClient)
    certificateUrl = 'http://localhost:3000/machloucertificate'

    // Get All Certificates
    getAllCertificates():Observable<Certificate[]> {
      return this.http.get<Certificate[]>(`${this.certificateUrl}`)

    }

}
