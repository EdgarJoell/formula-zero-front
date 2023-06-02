import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ExperiencesService {
   constructor(private http: HttpClient) { }

   getAllExperiences() {
      return this.http.get(
        `http://localhost:8080/api/experiences/`
      );
   } 
}