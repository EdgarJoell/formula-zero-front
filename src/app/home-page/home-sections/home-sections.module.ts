import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ExperiencesSectionComponent } from './experiences-section/experiences-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';



@NgModule({
  declarations: [
    AboutSectionComponent,
    ExperiencesSectionComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeSectionsModule { }
