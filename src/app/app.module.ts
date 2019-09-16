import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ProfileComponent } from './custom-component/profile/profile.component';
import { ZoomDirective } from './custom-component/directives/zoom.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    ProfileComponent,
    ZoomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
