import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HeaderSectionsModule } from './header-sections/header-sections.module';



@NgModule({
  declarations: [
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    HeaderSectionsModule
  ],
  exports: [
    HeaderPageComponent
  ]
})
export class HeaderModule { }
