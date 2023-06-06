import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesSectionComponent } from './experiences-section/experiences-section.component';
import { StayForTheRaceSectionComponent } from './stay-for-the-race-section/stay-for-the-race-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { IndividualExperiencesPageModule } from './experiences-section/individual-experiences-page/individual-experiences-page.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent,
    IntroSectionComponent
  ],
  imports: [
    CommonModule,
    IndividualExperiencesPageModule,
    AppRoutingModule
  ],
  exports: [
    IntroSectionComponent,
    ExperiencesSectionComponent,
    StayForTheRaceSectionComponent
  ]
})
export class ExperienceSectionsModule { }
