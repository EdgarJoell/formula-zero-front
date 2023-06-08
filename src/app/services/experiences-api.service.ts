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

   getOneExperience(experienceId: number) {
      return this.http.get(
         `http://localhost:8080/api/experiences/${experienceId}/`
      );
   }

   updateExperience(experienceObject: any, experienceId: number) {
      console.log(experienceId, experienceObject);
      return this.http.put(
         `http://localhost:8080/api/update-experiences/${experienceId}/`, {car : experienceObject} );
   }


}