import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgLang } from '../../models/prog-lang';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguage {

    http = inject(HttpClient)
  progLangUrl = 'http://localhost:3000/machlouprogramming_language'

  // Get All Progamming Languages
  getAllProgLanguages():Observable<ProgLang[]> {
    return this.http.get<ProgLang[]>(`${this.progLangUrl}`)

  }

}
