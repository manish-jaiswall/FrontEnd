import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
