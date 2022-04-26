import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestAPIService } from 'src/services/rest-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
