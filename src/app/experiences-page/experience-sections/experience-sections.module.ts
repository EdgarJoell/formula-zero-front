import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesSectionComponent } from './experiences-section/experiences-section.component';
import { StayForTheRaceSectionComponent } from './stay-for-the-race-section/stay-for-the-race-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';



@NgModule({
  declarations: [
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent,
    IntroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroSectionComponent,
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent
  ]
})
export class ExperienceSectionsModule { }
