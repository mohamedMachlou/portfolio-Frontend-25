import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Framework {

      http = inject(HttpClient)
  frameworkUrl = 'http://localhost:3000/machlouframeworks_tool'

  // Get All Framework Bakend & Outils
  getAllFrameworks():Observable<Framework[]> {
    return this.http.get<Framework[]>(`${this.frameworkUrl}`)

  }

}
