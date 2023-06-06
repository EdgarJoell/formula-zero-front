import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { ExperienceComponent } from './experiences-page/experience/experience.component';
import { IndividualExperiencesComponent } from './experiences-page/experience-sections/experiences-section/individual-experiences-page/individual-experiences/individual-experiences.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'experiences',
      component: ExperienceComponent
   },
   {
      path: 'experience-details/:id',
      component: IndividualExperiencesComponent
   }

]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }