import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SocialsComponent } from './socials/socials.component';



@NgModule({
  declarations: [
    LogoComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    SocialsComponent
  ]
})
export class FooterSectionsModule { }
