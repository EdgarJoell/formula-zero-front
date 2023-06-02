import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { FooterSectionsModule } from './footer-sections/footer-sections.module';



@NgModule({
  declarations: [
    FooterPageComponent
  ],
  imports: [
    CommonModule,
    FooterSectionsModule
  ],
  exports: [
    FooterPageComponent
  ]
})
export class FooterModule { }
