import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestAPIService } from 'src/services/rest-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from 'src/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    NavbarComponent,
    ProductCardComponent,
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
