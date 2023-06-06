import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ExperiencesService {
   constructor(private http: HttpClient) { }

   experiences = this.getAllExperiences();

   getAllExperiences() {
      return this.http.get(
        `http://localhost:8080/api/experiences/`
      );
   } 

   getOneExperience(experienceId: number) {
      return this.http.get(
         `http://localhost:8080/api/experiences/${experienceId}/`
      );
   }
}