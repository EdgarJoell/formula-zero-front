import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { ExperienceComponent } from './experiences-page/experience/experience.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'experiences',
      component: ExperienceComponent
   }

]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }