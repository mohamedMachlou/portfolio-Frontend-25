import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateService } from '../../core/services/certificate-service';
import {  Mycertificate } from '../../models/mycertificate';

@Component({
  selector: 'app-certificate',
  imports: [],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class Certificate implements OnInit {

  // Injection
  router = inject(Router);

  // Services
  certificateService = inject(CertificateService);

    // Signals
  allCertificates = signal<Mycertificate[]>([]);


  // Ng OnInit
  ngOnInit(): void {

     // Load Certificates
    this.certificateService.getAllCertificates().subscribe((certificates) => {
      this.allCertificates.set(certificates)
      console.log('all certifs : ', this.allCertificates())
    })

  }


   // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }


}
