import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceSectionsModule } from './experience-sections/experience-sections.module';



@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceSectionsModule
  ]
})
export class ExperiencesPageModule { }
