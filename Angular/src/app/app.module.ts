import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ProfileComponent,
    InfoComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
