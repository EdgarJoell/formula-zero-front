import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    LogoComponent,
    NavLinksComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    NavLinksComponent,
    SearchBarComponent
  ]
})
export class HeaderSectionsModule { }
