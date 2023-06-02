import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoSectionComponent } from './into-section/into-section.component';
import { ExperiencesSectionComponent } from './experiences-section/experiences-section.component';
import { StayForTheRaceSectionComponent } from './stay-for-the-race-section/stay-for-the-race-section.component';



@NgModule({
  declarations: [
    IntoSectionComponent,
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntoSectionComponent,
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent
  ]
})
export class ExperienceSectionsModule { }
