import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavLinksTwoComponent } from './nav-links-two/nav-links-two.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LogoComponent,
    NavLinksComponent,
    SearchBarComponent,
    NavLinksTwoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogoComponent,
    NavLinksComponent,
    SearchBarComponent,
    NavLinksTwoComponent
  ]
})
export class HeaderSectionsModule { }
