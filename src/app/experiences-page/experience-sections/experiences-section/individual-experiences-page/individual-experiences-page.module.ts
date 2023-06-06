import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualExperiencesComponent } from './individual-experiences/individual-experiences.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    IndividualExperiencesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    IndividualExperiencesComponent
  ]
})
export class IndividualExperiencesPageModule { }
