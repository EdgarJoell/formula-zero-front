import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ExperiencesSectionComponent } from './experiences-section/experiences-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AboutSectionComponent,
    ExperiencesSectionComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AboutSectionComponent,
    ExperiencesSectionComponent,
    HeroSectionComponent
  ]
})
export class HomeSectionsModule { }
