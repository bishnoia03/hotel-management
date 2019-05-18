import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './matrial.module';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    routingComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxDaterangepickerMd.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
